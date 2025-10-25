const STORAGE_KEY = "idleQuarry.saveSlots.v1";
const SAVE_SLOT_COUNT = 5;
const MAX_MINING_LEVEL = 99;

const STONES = [
  {
    id: "stone",
    name: "Stone",
    description: "Reliable building blocks that keep the crew sharp.",
    levelRequirement: 1,
    yield: [1, 2],
    baseSwingDurationMs: 4000,
    xp: 25,
  },
  {
    id: "copper",
    name: "Copper Ore",
    description: "Warm streaks of metal that smelt into sturdy fittings.",
    levelRequirement: 5,
    yield: [1, 2],
    baseSwingDurationMs: 5200,
    xp: 45,
  },
  {
    id: "iron",
    name: "Iron Ore",
    description: "Dense seams demanding a steady rhythm to break free.",
    levelRequirement: 10,
    yield: [1, 2],
    baseSwingDurationMs: 6000,
    xp: 60,
  },
  {
    id: "silver",
    name: "Silver Vein",
    description: "Shimmering veins prized by jewelers and nobles alike.",
    levelRequirement: 20,
    yield: [1, 3],
    baseSwingDurationMs: 6800,
    xp: 85,
  },
  {
    id: "gold",
    name: "Gold Deposit",
    description: "Heavy nuggets that test the crew's endurance.",
    levelRequirement: 30,
    yield: [1, 2],
    baseSwingDurationMs: 7600,
    xp: 110,
  },
  {
    id: "emerald",
    name: "Emerald Cluster",
    description: "Brilliant greens guarded by stubborn rock.",
    levelRequirement: 45,
    yield: [1, 2],
    baseSwingDurationMs: 8600,
    xp: 150,
  },
  {
    id: "diamond",
    name: "Diamond Core",
    description: "The quarry's crown jewel—unyielding but priceless.",
    levelRequirement: 60,
    yield: [1, 1],
    baseSwingDurationMs: 9600,
    xp: 220,
  },
];

function createInitialInventory() {
  return STONES.reduce((inventory, stone) => {
    inventory[stone.id] = 0;
    return inventory;
  }, {});
}

function getXpToNext(level) {
  if (level >= MAX_MINING_LEVEL) return 0;
  return Math.floor(100 * Math.pow(1.12, level - 1));
}

const state = {
  pickaxe: {
    name: "Standard Pickaxe",
  },
  mining: {
    active: false,
    startTime: 0,
    timerId: null,
    currentDurationMs: 0,
    activeStoneId: null,
  },
  inventory: createInitialInventory(),
  autoContinue: true,
  log: [],
  logLimit: 9,
  currentStoneId: STONES[0].id,
  miningSkill: {
    level: 1,
    xp: 0,
    xpToNext: getXpToNext(1),
  },
};

let saveSlots = Array(SAVE_SLOT_COUNT).fill(null);

const elements = {};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  elements.mineButton = document.getElementById("mine-button");
  elements.progressBar = document.getElementById("progress-bar");
  elements.progressLabel = document.getElementById("progress-label");
  elements.pickaxeName = document.getElementById("pickaxe-name");
  elements.autoContinue = document.getElementById("auto-continue");
  elements.logEntries = document.getElementById("log-entries");
  elements.swingDuration = document.getElementById("swing-duration");
  elements.topSwingDuration = document.getElementById("top-swing-duration");
  elements.tabButtons = document.querySelectorAll("[data-tab-target]");
  elements.tabPanels = document.querySelectorAll("[data-tab-panel]");
  elements.inventoryList = document.getElementById("inventory-list");
  elements.stoneSelect = document.getElementById("stone-select");
  elements.resourceRequirement = document.getElementById("resource-requirement");
  elements.resourceDescription = document.getElementById("resource-description");
  elements.topResourceName = document.getElementById("top-resource-name");
  elements.topResourceCount = document.getElementById("top-resource-count");
  elements.topMiningLevel = document.getElementById("top-mining-level");
  elements.topMiningXp = document.getElementById("top-mining-xp");
  elements.topPickaxeName = document.getElementById("top-pickaxe-name");
  elements.pickaxeName = document.getElementById("pickaxe-name");
  elements.miningLevel = document.getElementById("mining-level");
  elements.miningXp = document.getElementById("mining-xp");
  elements.xpToNext = document.getElementById("xp-to-next");
  elements.currentStoneName = document.getElementById("current-stone-name");
  elements.currentStoneYield = document.getElementById("current-stone-yield");
  elements.saveSlotList = document.getElementById("save-slot-list");
  elements.autoContinue.checked = state.autoContinue;

  elements.mineButton.addEventListener("click", toggleMining);
  elements.autoContinue.addEventListener("change", (event) => {
    state.autoContinue = event.target.checked;
  });

  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.tabTarget);
    });
  });

  elements.stoneSelect.addEventListener("change", (event) => {
    state.currentStoneId = event.target.value;
    renderStoneOptions();
    updateResourceDetails();
  });

  elements.saveSlotList.addEventListener("click", handleSaveSlotAction);

  loadSaveSlots();
  renderStoneOptions();
  updateResourceDetails();
  renderInventory();
  renderLog();
  updateMiningStats();
  updateMiningSkillDisplays();
  updateTopReadouts();
  renderSaveSlots();

  elements.pickaxeName.textContent = state.pickaxe.name;
  if (elements.topPickaxeName) {
    elements.topPickaxeName.textContent = state.pickaxe.name;
  }

  const initialTab =
    document.querySelector(".tab-button.active")?.dataset.tabTarget || "quarry";
  switchTab(initialTab);
}

function toggleMining() {
  if (state.mining.active) {
    cancelMiningCycle("You take a breather and pause your swing.");
    return;
  }

  startMiningCycle();
}

function startMiningCycle() {
  if (state.mining.active) return;

  const stone = getCurrentStone();
  if (!stone) return;

  if (state.miningSkill.level < stone.levelRequirement) {
    pushLog(
      `That seam feels beyond you. Mining ${stone.name} requires level ${stone.levelRequirement}.`
    );
    return;
  }

  state.mining.active = true;
  state.mining.startTime = performance.now();
  state.mining.currentDurationMs = getEffectiveSwingDuration(stone);
  state.mining.activeStoneId = stone.id;
  elements.mineButton.textContent = "Stop Mining";
  elements.mineButton.disabled = false;
  updateProgressLabel("Working");
  tickMining();
}

function cancelMiningCycle(message) {
  state.mining.active = false;
  state.mining.currentDurationMs = 0;
  state.mining.activeStoneId = null;
  if (state.mining.timerId) {
    cancelAnimationFrame(state.mining.timerId);
    state.mining.timerId = null;
  }

  elements.progressBar.style.width = "0%";
  elements.mineButton.textContent = "Start Mining";
  elements.mineButton.disabled = false;
  updateProgressLabel("Idle");
  if (message) {
    pushLog(message);
  }
}

function tickMining() {
  if (!state.mining.active) return;

  state.mining.timerId = requestAnimationFrame((timestamp) => {
    const elapsed = timestamp - state.mining.startTime;
    const duration = state.mining.currentDurationMs;
    const progress = Math.min(1, duration ? elapsed / duration : 0);

    elements.progressBar.style.width = `${progress * 100}%`;
    updateProgressLabel(`${Math.round(progress * 100)}%`);

    if (progress >= 1) {
      completeMiningCycle();
      return;
    }

    tickMining();
  });
}

function completeMiningCycle() {
  state.mining.active = false;
  const stoneId = state.mining.activeStoneId;
  const stone =
    STONES.find((candidate) => candidate.id === stoneId) || getCurrentStone();
  state.mining.activeStoneId = null;

  elements.mineButton.textContent = state.autoContinue
    ? "Preparing next swing"
    : "Start Mining";
  elements.mineButton.disabled = state.autoContinue;
  updateProgressLabel("Hauling");

  const haul = calculateYield(stone);
  state.inventory[stone.id] = (state.inventory[stone.id] || 0) + haul;
  renderInventory();

  const resourceName = haul === 1 ? stone.name : `${stone.name}s`;
  pushLog(`You pry loose ${formatNumber(haul)} ${resourceName}.`);

  const xpGained = haul * stone.xp;
  gainMiningXp(xpGained);

  setTimeout(() => {
    elements.progressBar.style.width = "0%";
    if (!state.autoContinue) {
      elements.mineButton.disabled = false;
      updateProgressLabel("Idle");
      return;
    }

    startMiningCycle();
  }, 600);
}

function calculateYield(stone) {
  const [min, max] = stone.yield;
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderInventory() {
  if (!elements.inventoryList) return;
  elements.inventoryList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  STONES.forEach((stone) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="item-name">${stone.name}</span>
      <span class="item-qty">${formatNumber(state.inventory[stone.id] || 0)}</span>
    `;
    fragment.appendChild(li);
  });

  elements.inventoryList.appendChild(fragment);
  updateTopReadouts();
}

function pushLog(entry) {
  state.log.unshift({
    id: createId(),
    text: entry,
    time: new Date(),
  });

  if (state.log.length > state.logLimit) {
    state.log.length = state.logLimit;
  }

  renderLog();
}

function renderLog() {
  if (!elements.logEntries) return;
  elements.logEntries.innerHTML = "";
  const fragment = document.createDocumentFragment();

  state.log.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry.text;
    fragment.appendChild(li);
  });

  if (!state.log.length) {
    const li = document.createElement("li");
    li.textContent = "Your quarry log is empty.";
    li.classList.add("log-empty");
    fragment.appendChild(li);
  }

  elements.logEntries.appendChild(fragment);
}

function updateProgressLabel(text) {
  elements.progressLabel.textContent = text;
}

function updateTopReadouts() {
  const stone = getCurrentStone();
  if (elements.topResourceName && stone) {
    elements.topResourceName.textContent = stone.name;
  }
  if (elements.topResourceCount && stone) {
    elements.topResourceCount.textContent = formatNumber(
      state.inventory[stone.id] || 0
    );
  }
  if (elements.topPickaxeName) {
    elements.topPickaxeName.textContent = state.pickaxe.name;
  }
  if (elements.topSwingDuration) {
    const stoneDuration = getEffectiveSwingDuration(stone);
    elements.topSwingDuration.textContent = (stoneDuration / 1000).toFixed(1);
  }
  if (elements.topMiningLevel) {
    elements.topMiningLevel.textContent = state.miningSkill.level;
  }
  if (elements.topMiningXp) {
    elements.topMiningXp.textContent = state.miningSkill.level >= MAX_MINING_LEVEL
      ? "--"
      : formatNumber(state.miningSkill.xpToNext - state.miningSkill.xp);
  }
}

function switchTab(target) {
  if (!target) return;

  elements.tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === target;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  elements.tabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === target;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `log-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function getCurrentStone() {
  return STONES.find((stone) => stone.id === state.currentStoneId) || STONES[0];
}

function getEffectiveSwingDuration(stone) {
  if (!stone) return 0;
  const speedBonus = 1 + (state.miningSkill.level - 1) * 0.015;
  const effective = Math.round(stone.baseSwingDurationMs / speedBonus);
  return Math.max(1200, effective);
}

function formatYieldRange(stone) {
  const [min, max] = stone.yield;
  return min === max ? `${min}` : `${min}-${max}`;
}

function renderStoneOptions() {
  if (!elements.stoneSelect) return;
  elements.stoneSelect.innerHTML = "";

  STONES.forEach((stone) => {
    const option = document.createElement("option");
    const locked = state.miningSkill.level < stone.levelRequirement;
    option.value = stone.id;
    option.textContent = `${stone.name} (Lv ${stone.levelRequirement}${
      locked ? " – locked" : ""
    })`;
    option.disabled = locked;
    if (state.currentStoneId === stone.id) {
      option.selected = true;
    }
    elements.stoneSelect.appendChild(option);
  });

  const currentStone = STONES.find(
    (stone) =>
      stone.id === state.currentStoneId && state.miningSkill.level >= stone.levelRequirement
  );

  if (currentStone) {
    elements.stoneSelect.value = state.currentStoneId;
    return;
  }

  const fallback =
    STONES.find((stone) => state.miningSkill.level >= stone.levelRequirement) || STONES[0];
  state.currentStoneId = fallback.id;
  elements.stoneSelect.value = fallback.id;
}

function updateResourceDetails() {
  const stone = getCurrentStone();
  if (!stone) return;
  if (elements.resourceRequirement) {
    const locked = state.miningSkill.level < stone.levelRequirement;
    elements.resourceRequirement.textContent = locked
      ? `Requires mining level ${stone.levelRequirement}.`
      : `Unlocked at level ${stone.levelRequirement}.`;
    elements.resourceRequirement.classList.toggle("locked", locked);
  }
  if (elements.resourceDescription) {
    const baseSeconds = (stone.baseSwingDurationMs / 1000).toFixed(1);
    elements.resourceDescription.textContent = `${stone.description} Base swing ${baseSeconds}s, yields ${formatYieldRange(
      stone
    )} per haul.`;
  }
  updateMiningStats();
}

function updateMiningStats() {
  const stone = getCurrentStone();
  if (elements.swingDuration && stone) {
    elements.swingDuration.textContent = (getEffectiveSwingDuration(stone) / 1000)
      .toFixed(2)
      .replace(/\.00$/, "");
  }
  if (elements.currentStoneName && stone) {
    elements.currentStoneName.textContent = stone.name;
  }
  if (elements.currentStoneYield && stone) {
    elements.currentStoneYield.textContent = formatYieldRange(stone);
  }
  updateTopReadouts();
}

function updateMiningSkillDisplays() {
  if (elements.miningLevel) {
    elements.miningLevel.textContent = state.miningSkill.level;
  }
  if (elements.miningXp) {
    elements.miningXp.textContent = formatNumber(state.miningSkill.xp);
  }
  if (elements.xpToNext) {
    elements.xpToNext.textContent =
      state.miningSkill.level >= MAX_MINING_LEVEL
        ? "Max"
        : formatNumber(state.miningSkill.xpToNext - state.miningSkill.xp);
  }
  updateTopReadouts();
  renderStoneOptions();
  updateResourceDetails();
}

function gainMiningXp(amount) {
  if (state.miningSkill.level >= MAX_MINING_LEVEL) {
    state.miningSkill.xp = 0;
    state.miningSkill.xpToNext = 0;
    return;
  }

  state.miningSkill.xp += amount;
  let leveledUp = false;
  while (
    state.miningSkill.level < MAX_MINING_LEVEL &&
    state.miningSkill.xp >= state.miningSkill.xpToNext
  ) {
    state.miningSkill.xp -= state.miningSkill.xpToNext;
    state.miningSkill.level += 1;
    state.miningSkill.xpToNext = getXpToNext(state.miningSkill.level);
    leveledUp = true;
  }

  if (state.miningSkill.level >= MAX_MINING_LEVEL) {
    state.miningSkill.level = MAX_MINING_LEVEL;
    state.miningSkill.xp = 0;
    state.miningSkill.xpToNext = 0;
  }

  if (leveledUp) {
    pushLog(`Your mining skill rises to level ${state.miningSkill.level}!`);
  }

  updateMiningSkillDisplays();
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString();
}

function loadSaveSlots() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      saveSlots = Array(SAVE_SLOT_COUNT).fill(null);
      return;
    }
    const parsed = JSON.parse(stored);
    saveSlots = Array.from({ length: SAVE_SLOT_COUNT }, (_, index) => parsed[index] || null);
  } catch (error) {
    console.warn("Unable to read save slots", error);
    saveSlots = Array(SAVE_SLOT_COUNT).fill(null);
  }
}

function persistSaveSlots() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveSlots));
  } catch (error) {
    console.warn("Unable to persist save slots", error);
  }
}

function renderSaveSlots() {
  if (!elements.saveSlotList) return;
  elements.saveSlotList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  saveSlots.forEach((slot, index) => {
    const li = document.createElement("li");
    li.className = "save-slot";
    li.dataset.slotIndex = String(index);

    const title = document.createElement("div");
    title.className = "save-slot__info";
    const slotTitle = document.createElement("span");
    slotTitle.className = "save-slot__title";
    slotTitle.textContent = `Slot ${index + 1}`;
    const slotDetails = document.createElement("span");
    slotDetails.className = "save-slot__details";

    if (slot) {
      const date = new Date(slot.savedAt);
      slotDetails.textContent = `${slot.name} • Lv ${slot.data?.miningSkill?.level ?? 1} • ${
        isNaN(date.getTime()) ? "Unknown" : date.toLocaleString()
      }`;
    } else {
      slotDetails.textContent = "Empty";
    }

    title.appendChild(slotTitle);
    title.appendChild(slotDetails);

    const actions = document.createElement("div");
    actions.className = "save-slot__actions";

    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.dataset.action = "save";
    saveButton.textContent = "Save";

    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.dataset.action = "load";
    loadButton.textContent = "Load";
    loadButton.disabled = !slot;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";
    deleteButton.disabled = !slot;

    actions.appendChild(saveButton);
    actions.appendChild(loadButton);
    actions.appendChild(deleteButton);

    li.appendChild(title);
    li.appendChild(actions);
    fragment.appendChild(li);
  });

  elements.saveSlotList.appendChild(fragment);
}

function handleSaveSlotAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const slotIndex = Number(button.closest(".save-slot")?.dataset.slotIndex ?? -1);
  if (slotIndex < 0 || slotIndex >= SAVE_SLOT_COUNT) return;

  const action = button.dataset.action;
  if (action === "save") {
    saveToSlot(slotIndex);
  } else if (action === "load") {
    loadFromSlot(slotIndex);
  } else if (action === "delete") {
    deleteSlot(slotIndex);
  }
}

function saveToSlot(index) {
  const defaultName = saveSlots[index]?.name || `Expedition ${index + 1}`;
  const name = window.prompt("Name this save:", defaultName);
  if (name === null) return;

  const trimmed = name.trim() || defaultName;
  const data = createSaveData();
  saveSlots[index] = {
    name: trimmed,
    savedAt: Date.now(),
    data,
  };
  persistSaveSlots();
  renderSaveSlots();
  pushLog(`Save stored in slot ${index + 1}.`);
}

function loadFromSlot(index) {
  const slot = saveSlots[index];
  if (!slot) {
    pushLog("That slot is empty.");
    return;
  }

  const confirmLoad = window.confirm(
    `Load ${slot.name}? This will overwrite your current progress.`
  );
  if (!confirmLoad) return;

  cancelMiningCycle();
  applySaveData(slot.data);
  pushLog(`Loaded ${slot.name} from slot ${index + 1}.`);
}

function deleteSlot(index) {
  const slot = saveSlots[index];
  if (!slot) return;
  const confirmDelete = window.confirm(
    `Delete ${slot.name} from slot ${index + 1}? This cannot be undone.`
  );
  if (!confirmDelete) return;

  saveSlots[index] = null;
  persistSaveSlots();
  renderSaveSlots();
  pushLog(`Slot ${index + 1} has been cleared.`);
}

function createSaveData() {
  return {
    version: 1,
    inventory: { ...state.inventory },
    miningSkill: {
      level: state.miningSkill.level,
      xp: state.miningSkill.xp,
    },
    currentStoneId: state.currentStoneId,
    autoContinue: state.autoContinue,
    log: state.log.slice(),
  };
}

function applySaveData(data) {
  Object.assign(state.inventory, createInitialInventory(), data.inventory || {});

  state.miningSkill.level = Math.min(
    MAX_MINING_LEVEL,
    Math.max(1, data.miningSkill?.level ?? 1)
  );
  state.miningSkill.xp = data.miningSkill?.xp ?? 0;
  state.miningSkill.xpToNext = getXpToNext(state.miningSkill.level);
  if (state.miningSkill.level >= MAX_MINING_LEVEL) {
    state.miningSkill.xp = 0;
    state.miningSkill.xpToNext = 0;
  } else {
    state.miningSkill.xp = Math.min(state.miningSkill.xp, state.miningSkill.xpToNext);
  }

  const requestedStone = data.currentStoneId || STONES[0].id;
  const unlockedStone =
    STONES.find(
      (stone) =>
        stone.id === requestedStone && state.miningSkill.level >= stone.levelRequirement
    ) ||
    [...STONES]
      .reverse()
      .find((stone) => state.miningSkill.level >= stone.levelRequirement) ||
    STONES[0];
  state.currentStoneId = unlockedStone.id;

  state.autoContinue = data.autoContinue ?? true;
  if (elements.autoContinue) {
    elements.autoContinue.checked = state.autoContinue;
  }

  state.log = Array.isArray(data.log) ? data.log.slice(0, state.logLimit) : [];

  renderInventory();
  renderLog();
  renderStoneOptions();
  updateResourceDetails();
  updateMiningSkillDisplays();
  updateMiningStats();
  updateTopReadouts();
}
