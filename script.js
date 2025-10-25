const STORAGE_KEY = "idleQuarry.saveSlots.v1";
const SAVE_SLOT_COUNT = 5;
const MAX_LEVEL = 99;

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

const SMELTING_RECIPES = [
  {
    id: "copper_bar",
    name: "Copper Bar",
    oreId: "copper",
    oreAmount: 3,
    levelRequirement: 1,
    xp: 45,
  },
  {
    id: "iron_bar",
    name: "Iron Bar",
    oreId: "iron",
    oreAmount: 4,
    levelRequirement: 10,
    xp: 70,
  },
  {
    id: "silver_bar",
    name: "Silver Bar",
    oreId: "silver",
    oreAmount: 5,
    levelRequirement: 20,
    xp: 110,
  },
  {
    id: "gold_bar",
    name: "Gold Bar",
    oreId: "gold",
    oreAmount: 6,
    levelRequirement: 30,
    xp: 165,
  },
  {
    id: "emerald_inlay",
    name: "Emerald Inlay",
    oreId: "emerald",
    oreAmount: 8,
    levelRequirement: 45,
    xp: 240,
  },
  {
    id: "diamond_edge",
    name: "Diamond Edge",
    oreId: "diamond",
    oreAmount: 10,
    levelRequirement: 60,
    xp: 320,
  },
];

const TREES = [
  {
    id: "spruce",
    name: "Spruce Copse",
    logId: "spruce_log",
    logName: "Spruce Log",
    description: "Supple spruce with plenty of resin for campfires.",
    levelRequirement: 1,
    yield: [1, 2],
    baseSwingDurationMs: 4400,
    xp: 25,
  },
  {
    id: "birch",
    name: "Birch Grove",
    logId: "birch_log",
    logName: "Birch Log",
    description: "Pale birch trunks peel into papery curls with each swing.",
    levelRequirement: 4,
    yield: [1, 2],
    baseSwingDurationMs: 4800,
    xp: 35,
  },
  {
    id: "oak",
    name: "Oak Stand",
    logId: "oak_log",
    logName: "Oak Log",
    description: "Sturdy oak that rewards patient chopping.",
    levelRequirement: 8,
    yield: [1, 2],
    baseSwingDurationMs: 5200,
    xp: 50,
  },
  {
    id: "willow",
    name: "Willow Stand",
    logId: "willow_log",
    logName: "Willow Log",
    description: "Graceful willow boughs that bend before your blade.",
    levelRequirement: 14,
    yield: [1, 3],
    baseSwingDurationMs: 5600,
    xp: 65,
  },
  {
    id: "maple",
    name: "Maple Grove",
    logId: "maple_log",
    logName: "Maple Log",
    description: "Sweet sapwood that smells of syrup.",
    levelRequirement: 20,
    yield: [1, 3],
    baseSwingDurationMs: 6000,
    xp: 90,
  },
  {
    id: "ash",
    name: "Ash Copse",
    logId: "ash_log",
    logName: "Ash Log",
    description: "Straight-grained ash ready for hafts and handles.",
    levelRequirement: 26,
    yield: [1, 3],
    baseSwingDurationMs: 6400,
    xp: 105,
  },
  {
    id: "yew",
    name: "Yew Thicket",
    logId: "yew_log",
    logName: "Yew Log",
    description: "Dense yew wood prized for bows.",
    levelRequirement: 32,
    yield: [1, 2],
    baseSwingDurationMs: 6800,
    xp: 130,
  },
  {
    id: "elder",
    name: "Elder Grove",
    logId: "elder_log",
    logName: "Elder Log",
    description: "Ancient elderwood with a violet sheen.",
    levelRequirement: 45,
    yield: [1, 2],
    baseSwingDurationMs: 7800,
    xp: 210,
  },
  {
    id: "redwood",
    name: "Redwood Giant",
    logId: "redwood_log",
    logName: "Redwood Log",
    description: "Towering redwoods that demand a seasoned woodsman.",
    levelRequirement: 70,
    yield: [1, 2],
    baseSwingDurationMs: 8400,
    xp: 280,
  },
];

const PICKAXES = [
  {
    id: "standard",
    name: "Standard Pickaxe",
    miningLevelRequirement: 1,
    smithingLevelRequirement: 1,
    speedMultiplier: 1,
    yieldMultiplier: 1,
    cost: {},
    xp: 0,
  },
  {
    id: "copper_pickaxe",
    name: "Copper Pickaxe",
    miningLevelRequirement: 5,
    smithingLevelRequirement: 5,
    speedMultiplier: 1.1,
    yieldMultiplier: 1.15,
    cost: { copper_bar: 6 },
    xp: 90,
  },
  {
    id: "iron_pickaxe",
    name: "Iron Pickaxe",
    miningLevelRequirement: 15,
    smithingLevelRequirement: 12,
    speedMultiplier: 1.2,
    yieldMultiplier: 1.25,
    cost: { iron_bar: 7 },
    xp: 160,
  },
  {
    id: "silver_pickaxe",
    name: "Silver Pickaxe",
    miningLevelRequirement: 30,
    smithingLevelRequirement: 22,
    speedMultiplier: 1.35,
    yieldMultiplier: 1.35,
    cost: { silver_bar: 8 },
    xp: 260,
  },
  {
    id: "gold_pickaxe",
    name: "Gold Pickaxe",
    miningLevelRequirement: 45,
    smithingLevelRequirement: 35,
    speedMultiplier: 1.5,
    yieldMultiplier: 1.45,
    cost: { gold_bar: 9 },
    xp: 380,
  },
  {
    id: "emerald_pickaxe",
    name: "Emerald Pickaxe",
    miningLevelRequirement: 60,
    smithingLevelRequirement: 48,
    speedMultiplier: 1.7,
    yieldMultiplier: 1.55,
    cost: { emerald_inlay: 4, gold_bar: 6 },
    xp: 520,
  },
  {
    id: "diamond_pickaxe",
    name: "Diamond Pickaxe",
    miningLevelRequirement: 75,
    smithingLevelRequirement: 62,
    speedMultiplier: 2,
    yieldMultiplier: 1.75,
    cost: { diamond_edge: 4, emerald_inlay: 4 },
    xp: 680,
  },
];

const AXES = [
  {
    id: "worn_hatchet",
    name: "Worn Hatchet",
    woodcuttingLevelRequirement: 1,
    smithingLevelRequirement: 1,
    speedMultiplier: 1,
    yieldMultiplier: 1,
    cost: {},
    xp: 0,
  },
  {
    id: "copper_axe",
    name: "Copper Axe",
    woodcuttingLevelRequirement: 5,
    smithingLevelRequirement: 5,
    speedMultiplier: 1.12,
    yieldMultiplier: 1.1,
    cost: { copper_bar: 4 },
    xp: 75,
  },
  {
    id: "iron_axe",
    name: "Iron Axe",
    woodcuttingLevelRequirement: 15,
    smithingLevelRequirement: 12,
    speedMultiplier: 1.25,
    yieldMultiplier: 1.2,
    cost: { iron_bar: 6 },
    xp: 140,
  },
  {
    id: "steel_axe",
    name: "Steel Axe",
    woodcuttingLevelRequirement: 30,
    smithingLevelRequirement: 24,
    speedMultiplier: 1.38,
    yieldMultiplier: 1.3,
    cost: { iron_bar: 4, silver_bar: 4 },
    xp: 220,
  },
  {
    id: "elder_axe",
    name: "Elder Axe",
    woodcuttingLevelRequirement: 45,
    smithingLevelRequirement: 38,
    speedMultiplier: 1.55,
    yieldMultiplier: 1.45,
    cost: { gold_bar: 5, emerald_inlay: 2 },
    xp: 360,
  },
  {
    id: "mythril_axe",
    name: "Mythril Axe",
    woodcuttingLevelRequirement: 65,
    smithingLevelRequirement: 55,
    speedMultiplier: 1.8,
    yieldMultiplier: 1.6,
    cost: { diamond_edge: 2, emerald_inlay: 3 },
    xp: 520,
  },
];

const RESOURCE_REGISTRY = {};

function registerResource(id, name) {
  RESOURCE_REGISTRY[id] = name;
}

STONES.forEach((stone) => registerResource(stone.id, stone.name));
SMELTING_RECIPES.forEach((recipe) => registerResource(recipe.id, recipe.name));
TREES.forEach((tree) => registerResource(tree.logId, tree.logName));

const INVENTORY_GROUPS = [
  {
    title: "Ores",
    resources: STONES.map((stone) => stone.id),
  },
  {
    title: "Logs",
    resources: TREES.map((tree) => tree.logId),
  },
  {
    title: "Bars & Components",
    resources: SMELTING_RECIPES.map((recipe) => recipe.id),
  },
];

function createInitialInventory() {
  return Object.keys(RESOURCE_REGISTRY).reduce((inventory, resourceId) => {
    inventory[resourceId] = 0;
    return inventory;
  }, {});
}

function getResourceName(resourceId) {
  return RESOURCE_REGISTRY[resourceId] || resourceId;
}

const SKILL_DEFINITIONS = [
  {
    id: "mining",
    name: "Mining",
    description: "Faster swings and richer hauls underground.",
  },
  {
    id: "smithing",
    name: "Smithing",
    description: "Smelt bars and forge equipment for your crew.",
  },
  {
    id: "woodcutting",
    name: "Woodcutting",
    description: "Harvest logs swiftly from the surrounding woods.",
  },
];

function getSkillDefinition(skillId) {
  return SKILL_DEFINITIONS.find((definition) => definition.id === skillId);
}

function createSkillState() {
  return {
    level: 1,
    xp: 0,
    xpToNext: getXpToNext(1),
  };
}

function getXpToNext(level) {
  if (level >= MAX_LEVEL) return 0;
  return Math.floor(150 * Math.pow(1.22, level - 1));
}

const state = {
  equipment: {
    pickaxeId: PICKAXES[0].id,
    axeId: AXES[0].id,
  },
  ownedPickaxes: new Set([PICKAXES[0].id]),
  ownedAxes: new Set([AXES[0].id]),
  mining: {
    active: false,
    startTime: 0,
    timerId: null,
    currentDurationMs: 0,
  },
  woodcutting: {
    active: false,
    startTime: 0,
    timerId: null,
    currentDurationMs: 0,
  },
  inventory: createInitialInventory(),
  autoContinue: {
    mining: true,
    woodcutting: true,
  },
  log: [],
  logLimit: 12,
  currentStoneId: STONES[0].id,
  currentTreeId: TREES[0].id,
  skills: {
    mining: createSkillState(),
    smithing: createSkillState(),
    woodcutting: createSkillState(),
  },
};

state.miningSkill = state.skills.mining;
state.smithingSkill = state.skills.smithing;
state.woodcuttingSkill = state.skills.woodcutting;

function getSkill(skillId) {
  return state.skills[skillId];
}

function getEquippedPickaxe() {
  return (
    PICKAXES.find((pickaxe) => pickaxe.id === state.equipment.pickaxeId) || PICKAXES[0]
  );
}

function getEquippedAxe() {
  return AXES.find((axe) => axe.id === state.equipment.axeId) || AXES[0];
}

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
  elements.autoContinueMining = document.getElementById("auto-continue");
  elements.swingDuration = document.getElementById("swing-duration");
  elements.stoneSelect = document.getElementById("stone-select");
  elements.resourceRequirement = document.getElementById("resource-requirement");
  elements.resourceDescription = document.getElementById("resource-description");
  elements.currentStoneName = document.getElementById("current-stone-name");
  elements.currentStoneYield = document.getElementById("current-stone-yield");
  elements.miningLevel = document.getElementById("mining-level");
  elements.miningXp = document.getElementById("mining-xp");
  elements.xpToNext = document.getElementById("xp-to-next");

  elements.chopButton = document.getElementById("chop-button");
  elements.woodProgressBar = document.getElementById("wood-progress-bar");
  elements.woodProgressLabel = document.getElementById("wood-progress-label");
  elements.axeName = document.getElementById("axe-name");
  elements.autoContinueWood = document.getElementById("wood-auto-continue");
  elements.chopDuration = document.getElementById("chop-duration");
  elements.treeSelect = document.getElementById("tree-select");
  elements.treeRequirement = document.getElementById("tree-requirement");
  elements.treeDescription = document.getElementById("tree-description");
  elements.currentTreeName = document.getElementById("current-tree-name");
  elements.currentTreeYield = document.getElementById("current-tree-yield");
  elements.woodcuttingLevel = document.getElementById("woodcutting-level");
  elements.woodcuttingXp = document.getElementById("woodcutting-xp");
  elements.woodcuttingXpToNext = document.getElementById("woodcutting-xp-to-next");

  elements.topResourceName = document.getElementById("top-resource-name");
  elements.topResourceCount = document.getElementById("top-resource-count");
  elements.topPickaxeName = document.getElementById("top-pickaxe-name");
  elements.topSwingDuration = document.getElementById("top-swing-duration");
  elements.topMiningLevel = document.getElementById("top-mining-level");
  elements.topMiningXp = document.getElementById("top-mining-xp");
  elements.topSmithingLevel = document.getElementById("top-smithing-level");
  elements.topSmithingXp = document.getElementById("top-smithing-xp");
  elements.topWoodcuttingLevel = document.getElementById("top-woodcutting-level");
  elements.topWoodcuttingXp = document.getElementById("top-woodcutting-xp");

  elements.inventoryList = document.getElementById("inventory-list");
  elements.skillList = document.getElementById("skill-list");
  elements.logEntries = document.getElementById("log-entries");
  elements.saveSlotList = document.getElementById("save-slot-list");

  elements.smeltingList = document.getElementById("smelting-list");
  elements.pickaxeForgeList = document.getElementById("pickaxe-forge-list");
  elements.axeForgeList = document.getElementById("axe-forge-list");

  elements.tabButtons = document.querySelectorAll("[data-tab-target]");
  elements.tabPanels = document.querySelectorAll("[data-tab-panel]");
  elements.dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
  document.querySelectorAll("[data-dropdown-label]").forEach((label) => {
    if (!label.dataset.defaultLabel) {
      label.dataset.defaultLabel = label.textContent.trim();
    }
  });

  if (elements.autoContinueMining) {
    elements.autoContinueMining.checked = state.autoContinue.mining;
    elements.autoContinueMining.addEventListener("change", (event) => {
      state.autoContinue.mining = event.target.checked;
    });
  }

  if (elements.autoContinueWood) {
    elements.autoContinueWood.checked = state.autoContinue.woodcutting;
    elements.autoContinueWood.addEventListener("change", (event) => {
      state.autoContinue.woodcutting = event.target.checked;
    });
  }

  elements.mineButton?.addEventListener("click", toggleMining);
  elements.chopButton?.addEventListener("click", toggleWoodcutting);

  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.tabTarget);
      const dropdown = button.closest("[data-dropdown]");
      if (dropdown) {
        closeDropdown(dropdown);
      }
    });
  });

  elements.dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const dropdown = toggle.closest("[data-dropdown]");
      if (!dropdown) return;
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      closeAllDropdowns();
      if (!expanded) {
        openDropdown(dropdown, toggle);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-dropdown]")) {
      closeAllDropdowns();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
    }
  });

  elements.stoneSelect?.addEventListener("change", (event) => {
    state.currentStoneId = event.target.value;
    renderStoneOptions();
    updateResourceDetails();
  });

  elements.treeSelect?.addEventListener("change", (event) => {
    state.currentTreeId = event.target.value;
    renderTreeOptions();
    updateTreeDetails();
  });

  elements.saveSlotList?.addEventListener("click", handleSaveSlotAction);

  elements.smeltingList?.addEventListener("click", handleSmithingAction);
  elements.pickaxeForgeList?.addEventListener("click", handleSmithingAction);
  elements.axeForgeList?.addEventListener("click", handleSmithingAction);

  loadSaveSlots();
  renderStoneOptions();
  renderTreeOptions();
  updateResourceDetails();
  updateTreeDetails();
  renderInventory();
  renderLog();
  updateMiningStats();
  updateWoodcuttingStats();
  updateSkillDisplays();
  renderSmithingOptions();
  updateTopReadouts();
  renderSaveSlots();

  refreshEquipmentLabels();

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

  const miningSkill = getSkill("mining");
  if (miningSkill.level < stone.levelRequirement) {
    pushLog(
      `That seam feels beyond you. Mining ${stone.name} requires level ${stone.levelRequirement}.`
    );
    return;
  }

  const pickaxe = getEquippedPickaxe();
  if (miningSkill.level < pickaxe.miningLevelRequirement) {
    pushLog(
      `${pickaxe.name} feels unwieldy. You need mining level ${pickaxe.miningLevelRequirement} to swing it properly.`
    );
    return;
  }

  state.mining.active = true;
  state.mining.startTime = performance.now();
  state.mining.currentDurationMs = getEffectiveSwingDuration(stone);
  elements.mineButton.textContent = "Stop Mining";
  elements.mineButton.disabled = false;
  updateProgressLabel("Working");
  tickMining();
}

function cancelMiningCycle(message) {
  state.mining.active = false;
  state.mining.currentDurationMs = 0;
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
  const stone = getCurrentStone();

  elements.mineButton.textContent = state.autoContinue.mining
    ? "Preparing next swing"
    : "Start Mining";
  elements.mineButton.disabled = state.autoContinue.mining;
  updateProgressLabel("Hauling");

  const haul = calculateMiningYield(stone);
  state.inventory[stone.id] = (state.inventory[stone.id] || 0) + haul;
  renderInventory();
  renderSmithingOptions();

  const resourceName = haul === 1 ? stone.name : `${stone.name}s`;
  pushLog(`You pry loose ${formatNumber(haul)} ${resourceName}.`);

  const xpGained = haul * stone.xp;
  gainSkillXp("mining", xpGained);

  setTimeout(() => {
    elements.progressBar.style.width = "0%";
    if (!state.autoContinue.mining) {
      elements.mineButton.disabled = false;
      updateProgressLabel("Idle");
      return;
    }

    startMiningCycle();
  }, 600);
}

function calculateMiningYield(stone) {
  if (!stone) return 0;
  const [min, max] = stone.yield;
  const base =
    min === max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
  const pickaxe = getEquippedPickaxe();
  const multiplier = pickaxe?.yieldMultiplier ?? 1;
  return Math.max(1, Math.floor(base * multiplier));
}

function toggleWoodcutting() {
  if (state.woodcutting.active) {
    cancelWoodcuttingCycle("You shoulder the axe and pause.");
    return;
  }

  startWoodcuttingCycle();
}

function startWoodcuttingCycle() {
  if (state.woodcutting.active) return;

  const tree = getCurrentTree();
  if (!tree) return;

  const woodSkill = getSkill("woodcutting");
  if (woodSkill.level < tree.levelRequirement) {
    pushLog(
      `Those trees are tough. Woodcutting ${tree.name} requires level ${tree.levelRequirement}.`
    );
    return;
  }

  const axe = getEquippedAxe();
  if (woodSkill.level < axe.woodcuttingLevelRequirement) {
    pushLog(
      `${axe.name} feels too heavy. You need woodcutting level ${axe.woodcuttingLevelRequirement} to wield it well.`
    );
    return;
  }

  state.woodcutting.active = true;
  state.woodcutting.startTime = performance.now();
  state.woodcutting.currentDurationMs = getEffectiveChopDuration(tree);
  if (elements.chopButton) {
    elements.chopButton.textContent = "Stop Chopping";
    elements.chopButton.disabled = false;
  }
  updateWoodProgressLabel("Working");
  tickWoodcutting();
}

function cancelWoodcuttingCycle(message) {
  state.woodcutting.active = false;
  state.woodcutting.currentDurationMs = 0;
  if (state.woodcutting.timerId) {
    cancelAnimationFrame(state.woodcutting.timerId);
    state.woodcutting.timerId = null;
  }

  if (elements.woodProgressBar) {
    elements.woodProgressBar.style.width = "0%";
  }
  if (elements.chopButton) {
    elements.chopButton.textContent = "Start Chopping";
    elements.chopButton.disabled = false;
  }
  updateWoodProgressLabel("Idle");
  if (message) {
    pushLog(message);
  }
}

function tickWoodcutting() {
  if (!state.woodcutting.active) return;

  state.woodcutting.timerId = requestAnimationFrame((timestamp) => {
    const elapsed = timestamp - state.woodcutting.startTime;
    const duration = state.woodcutting.currentDurationMs;
    const progress = Math.min(1, duration ? elapsed / duration : 0);

    if (elements.woodProgressBar) {
      elements.woodProgressBar.style.width = `${progress * 100}%`;
    }
    updateWoodProgressLabel(`${Math.round(progress * 100)}%`);

    if (progress >= 1) {
      completeWoodcuttingCycle();
      return;
    }

    tickWoodcutting();
  });
}

function completeWoodcuttingCycle() {
  state.woodcutting.active = false;
  const tree = getCurrentTree();

  if (elements.chopButton) {
    elements.chopButton.textContent = state.autoContinue.woodcutting
      ? "Setting next chop"
      : "Start Chopping";
    elements.chopButton.disabled = state.autoContinue.woodcutting;
  }
  updateWoodProgressLabel("Hauling");

  const haul = calculateWoodYield(tree);
  const logId = tree.logId;
  state.inventory[logId] = (state.inventory[logId] || 0) + haul;
  renderInventory();
  renderSmithingOptions();

  const logName = haul === 1 ? tree.logName : `${tree.logName}s`;
  pushLog(`You gather ${formatNumber(haul)} ${logName}.`);

  const xpGained = haul * tree.xp;
  gainSkillXp("woodcutting", xpGained);

  setTimeout(() => {
    if (elements.woodProgressBar) {
      elements.woodProgressBar.style.width = "0%";
    }
    if (!state.autoContinue.woodcutting) {
      if (elements.chopButton) {
        elements.chopButton.disabled = false;
      }
      updateWoodProgressLabel("Idle");
      return;
    }

    startWoodcuttingCycle();
  }, 600);
}

function calculateWoodYield(tree) {
  if (!tree) return 0;
  const [min, max] = tree.yield;
  const base =
    min === max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
  const axe = getEquippedAxe();
  const multiplier = axe?.yieldMultiplier ?? 1;
  return Math.max(1, Math.floor(base * multiplier));
}

function refreshEquipmentLabels() {
  const pickaxe = getEquippedPickaxe();
  if (elements.pickaxeName && pickaxe) {
    elements.pickaxeName.textContent = pickaxe.name;
  }
  if (elements.topPickaxeName && pickaxe) {
    elements.topPickaxeName.textContent = pickaxe.name;
  }

  const axe = getEquippedAxe();
  if (elements.axeName && axe) {
    elements.axeName.textContent = axe.name;
  }

  updateTopReadouts();
}

function renderInventory() {
  if (!elements.inventoryList) return;
  elements.inventoryList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  INVENTORY_GROUPS.forEach((group) => {
    const header = document.createElement("li");
    header.className = "inventory-group";
    header.textContent = group.title;
    fragment.appendChild(header);

    group.resources.forEach((resourceId) => {
      const li = document.createElement("li");
      li.className = "inventory-entry";
      li.innerHTML = `
        <span class="item-name">${getResourceName(resourceId)}</span>
        <span class="item-qty">${formatNumber(state.inventory[resourceId] || 0)}</span>
      `;
      fragment.appendChild(li);
    });
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
  if (elements.progressLabel) {
    elements.progressLabel.textContent = text;
  }
}

function updateWoodProgressLabel(text) {
  if (elements.woodProgressLabel) {
    elements.woodProgressLabel.textContent = text;
  }
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
  const pickaxe = getEquippedPickaxe();
  if (elements.topPickaxeName && pickaxe) {
    elements.topPickaxeName.textContent = pickaxe.name;
  }
  if (elements.topSwingDuration && stone) {
    const stoneDuration = getEffectiveSwingDuration(stone);
    elements.topSwingDuration.textContent = (stoneDuration / 1000).toFixed(1);
  }

  const mining = getSkill("mining");
  if (elements.topMiningLevel) {
    elements.topMiningLevel.textContent = mining.level;
  }
  if (elements.topMiningXp) {
    elements.topMiningXp.textContent = mining.level >= MAX_LEVEL
      ? "--"
      : formatNumber(Math.max(0, mining.xpToNext - mining.xp));
  }

  const smithing = getSkill("smithing");
  if (elements.topSmithingLevel) {
    elements.topSmithingLevel.textContent = smithing.level;
  }
  if (elements.topSmithingXp) {
    elements.topSmithingXp.textContent = smithing.level >= MAX_LEVEL
      ? "--"
      : formatNumber(Math.max(0, smithing.xpToNext - smithing.xp));
  }

  const wood = getSkill("woodcutting");
  if (elements.topWoodcuttingLevel) {
    elements.topWoodcuttingLevel.textContent = wood.level;
  }
  if (elements.topWoodcuttingXp) {
    elements.topWoodcuttingXp.textContent = wood.level >= MAX_LEVEL
      ? "--"
      : formatNumber(Math.max(0, wood.xpToNext - wood.xp));
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

  updateDropdownSelection(target);
}

function closeDropdown(dropdown) {
  if (!dropdown) return;
  dropdown.removeAttribute("data-open");
  const toggle = dropdown.querySelector("[data-dropdown-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
  }
}

function closeAllDropdowns() {
  document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
    closeDropdown(dropdown);
  });
}

function openDropdown(dropdown, toggle) {
  if (!dropdown) return;
  dropdown.setAttribute("data-open", "true");
  if (toggle) {
    toggle.setAttribute("aria-expanded", "true");
  }
}

function updateDropdownSelection(targetTab) {
  document.querySelectorAll("[data-dropdown-menu]").forEach((menu) => {
    const dropdownId = menu.dataset.dropdownMenu;
    const label = dropdownId
      ? document.querySelector(`[data-dropdown-label="${dropdownId}"]`)
      : null;
    const buttons = menu.querySelectorAll("[data-tab-target]");
    let matched = false;

    buttons.forEach((button) => {
      const isActive = button.dataset.tabTarget === targetTab;
      button.classList.toggle("active", isActive);
      if (isActive) {
        matched = true;
        if (label) {
          const labelText = button.textContent.trim();
          label.textContent = labelText;
          label.dataset.lastSelection = labelText;
        }
      }
    });

    if (!matched && label) {
      const fallback =
        label.dataset.lastSelection ||
        label.dataset.defaultLabel ||
        label.textContent.trim();
      label.textContent = fallback;
    }
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
  const miningSkill = getSkill("mining");
  const pickaxe = getEquippedPickaxe();
  const skillBonus = 1 + (miningSkill.level - 1) * 0.015;
  const toolBonus = pickaxe?.speedMultiplier ?? 1;
  const effective = Math.round(stone.baseSwingDurationMs / (skillBonus * toolBonus));
  return Math.max(900, effective);
}

function formatYieldRange(stone) {
  const [min, max] = stone.yield;
  return min === max ? `${min}` : `${min}-${max}`;
}

function getCurrentTree() {
  return TREES.find((tree) => tree.id === state.currentTreeId) || TREES[0];
}

function getEffectiveChopDuration(tree) {
  if (!tree) return 0;
  const woodSkill = getSkill("woodcutting");
  const axe = getEquippedAxe();
  const skillBonus = 1 + (woodSkill.level - 1) * 0.015;
  const toolBonus = axe?.speedMultiplier ?? 1;
  const effective = Math.round(tree.baseSwingDurationMs / (skillBonus * toolBonus));
  return Math.max(900, effective);
}

function formatLogYield(tree) {
  const [min, max] = tree.yield;
  return min === max ? `${min}` : `${min}-${max}`;
}

function renderStoneOptions() {
  if (!elements.stoneSelect) return;
  elements.stoneSelect.innerHTML = "";

  const miningSkill = getSkill("mining");

  STONES.forEach((stone) => {
    const option = document.createElement("option");
    const locked = miningSkill.level < stone.levelRequirement;
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
      stone.id === state.currentStoneId && miningSkill.level >= stone.levelRequirement
  );

  if (currentStone) {
    elements.stoneSelect.value = state.currentStoneId;
    return;
  }

  const fallback =
    STONES.find((stone) => miningSkill.level >= stone.levelRequirement) || STONES[0];
  state.currentStoneId = fallback.id;
  elements.stoneSelect.value = fallback.id;
}

function renderTreeOptions() {
  if (!elements.treeSelect) return;
  elements.treeSelect.innerHTML = "";

  const woodSkill = getSkill("woodcutting");

  TREES.forEach((tree) => {
    const option = document.createElement("option");
    const locked = woodSkill.level < tree.levelRequirement;
    option.value = tree.id;
    option.textContent = `${tree.name} (Lv ${tree.levelRequirement}${
      locked ? " – locked" : ""
    })`;
    option.disabled = locked;
    if (state.currentTreeId === tree.id) {
      option.selected = true;
    }
    elements.treeSelect.appendChild(option);
  });

  const currentTree = TREES.find(
    (tree) =>
      tree.id === state.currentTreeId && woodSkill.level >= tree.levelRequirement
  );

  if (currentTree) {
    elements.treeSelect.value = state.currentTreeId;
    return;
  }

  const fallback =
    TREES.find((tree) => woodSkill.level >= tree.levelRequirement) || TREES[0];
  state.currentTreeId = fallback.id;
  elements.treeSelect.value = fallback.id;
}

function updateResourceDetails() {
  const stone = getCurrentStone();
  if (!stone) return;
  const miningSkill = getSkill("mining");
  if (elements.resourceRequirement) {
    const locked = miningSkill.level < stone.levelRequirement;
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

function updateTreeDetails() {
  const tree = getCurrentTree();
  if (!tree) return;
  const woodSkill = getSkill("woodcutting");
  if (elements.treeRequirement) {
    const locked = woodSkill.level < tree.levelRequirement;
    elements.treeRequirement.textContent = locked
      ? `Requires woodcutting level ${tree.levelRequirement}.`
      : `Unlocked at level ${tree.levelRequirement}.`;
    elements.treeRequirement.classList.toggle("locked", locked);
  }
  if (elements.treeDescription) {
    const baseSeconds = (tree.baseSwingDurationMs / 1000).toFixed(1);
    elements.treeDescription.textContent = `${tree.description} Base chop ${baseSeconds}s, yields ${formatLogYield(
      tree
    )} per haul.`;
  }
  updateWoodcuttingStats();
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

function updateWoodcuttingStats() {
  const tree = getCurrentTree();
  if (elements.chopDuration && tree) {
    elements.chopDuration.textContent = (getEffectiveChopDuration(tree) / 1000)
      .toFixed(2)
      .replace(/\.00$/, "");
  }
  if (elements.currentTreeName && tree) {
    elements.currentTreeName.textContent = tree.name;
  }
  if (elements.currentTreeYield && tree) {
    elements.currentTreeYield.textContent = formatLogYield(tree);
  }
  updateTopReadouts();
}

function updateSkillDisplays() {
  const mining = getSkill("mining");
  if (elements.miningLevel) {
    elements.miningLevel.textContent = mining.level;
  }
  if (elements.miningXp) {
    elements.miningXp.textContent = formatNumber(mining.xp);
  }
  if (elements.xpToNext) {
    elements.xpToNext.textContent =
      mining.level >= MAX_LEVEL ? "Max" : formatNumber(Math.max(0, mining.xpToNext - mining.xp));
  }

  const wood = getSkill("woodcutting");
  if (elements.woodcuttingLevel) {
    elements.woodcuttingLevel.textContent = wood.level;
  }
  if (elements.woodcuttingXp) {
    elements.woodcuttingXp.textContent = formatNumber(wood.xp);
  }
  if (elements.woodcuttingXpToNext) {
    elements.woodcuttingXpToNext.textContent =
      wood.level >= MAX_LEVEL ? "Max" : formatNumber(Math.max(0, wood.xpToNext - wood.xp));
  }

  renderSkillList();
  updateTopReadouts();
}

function gainSkillXp(skillId, amount) {
  const skill = getSkill(skillId);
  if (!skill) return;
  if (skill.level >= MAX_LEVEL) {
    skill.xp = 0;
    skill.xpToNext = 0;
    return;
  }

  skill.xp += amount;
  let leveledUp = false;
  while (skill.level < MAX_LEVEL && skill.xp >= skill.xpToNext) {
    skill.xp -= skill.xpToNext;
    skill.level += 1;
    skill.xpToNext = getXpToNext(skill.level);
    leveledUp = true;
  }

  if (skill.level >= MAX_LEVEL) {
    skill.level = MAX_LEVEL;
    skill.xp = 0;
    skill.xpToNext = 0;
  }

  if (leveledUp) {
    const skillDef = getSkillDefinition(skillId);
    const skillName = skillDef?.name || skillId;
    pushLog(`Your ${skillName.toLowerCase()} skill rises to level ${skill.level}!`);
    if (skillId === "mining") {
      renderStoneOptions();
      updateResourceDetails();
    } else if (skillId === "woodcutting") {
      renderTreeOptions();
      updateTreeDetails();
    } else if (skillId === "smithing") {
      renderSmithingOptions();
    }
  }

  updateSkillDisplays();
}

function renderSkillList() {
  if (!elements.skillList) return;
  elements.skillList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  SKILL_DEFINITIONS.forEach((definition) => {
    const skill = getSkill(definition.id);
    if (!skill) return;
    const li = document.createElement("li");
    li.className = "skill-list__item";
    const totalNeeded = skill.xpToNext || 1;
    const progress = skill.level >= MAX_LEVEL
      ? 100
      : Math.min(100, Math.round((skill.xp / totalNeeded) * 100));
    li.style.setProperty("--progress", `${progress}%`);

    const xpText =
      skill.level >= MAX_LEVEL
        ? "Mastered"
        : `${formatNumber(skill.xp)} / ${formatNumber(skill.xpToNext)} xp`;

    li.innerHTML = `
      <div class="skill-header">
        <span>${definition.name}</span>
        <span class="skill-rank">Lv ${skill.level}</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar__fill"></div>
      </div>
      <p class="skill-note">${xpText}</p>
      <p class="skill-note skill-note--subtitle">${definition.description}</p>
    `;
    fragment.appendChild(li);
  });

  elements.skillList.appendChild(fragment);
}

function renderSmithingOptions() {
  renderSmeltingList();
  renderForgeList(PICKAXES, elements.pickaxeForgeList, "pickaxe");
  renderForgeList(AXES, elements.axeForgeList, "axe");
}

function renderSmeltingList() {
  if (!elements.smeltingList) return;
  elements.smeltingList.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const smithing = getSkill("smithing");

  SMELTING_RECIPES.forEach((recipe) => {
    const li = document.createElement("li");
    li.className = "action-list__item";

    const summary = document.createElement("div");
    summary.className = "action-list__summary";

    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = recipe.name;
    const detail = document.createElement("p");
    detail.textContent = `Consumes ${recipe.oreAmount} ${getResourceName(recipe.oreId)} • +${formatNumber(recipe.xp)} xp`;
    info.appendChild(title);
    info.appendChild(detail);

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.action = "smelt";
    button.dataset.id = recipe.id;
    button.textContent = "Smelt";

    const ownedOre = state.inventory[recipe.oreId] || 0;
    const meetsLevel = smithing.level >= recipe.levelRequirement;
    const hasOre = ownedOre >= recipe.oreAmount;
    button.disabled = !(meetsLevel && hasOre);

    summary.appendChild(info);
    summary.appendChild(button);
    li.appendChild(summary);

    const messages = [];
    if (!meetsLevel) {
      messages.push(`Requires smithing level ${recipe.levelRequirement}.`);
    }
    if (!hasOre) {
      messages.push(
        `Need ${recipe.oreAmount} ${getResourceName(recipe.oreId)} (have ${formatNumber(ownedOre)}).`
      );
    }
    if (!messages.length) {
      messages.push(`Ready to smelt for ${formatNumber(recipe.xp)} xp.`);
    }

    const note = document.createElement("p");
    note.className = "action-list__note";
    if (!meetsLevel || !hasOre) {
      note.classList.add("action-list__note--warn");
    }
    note.textContent = messages.join(" ");
    li.appendChild(note);

    fragment.appendChild(li);
  });

  elements.smeltingList.appendChild(fragment);
}

function renderForgeList(tools, listElement, type) {
  if (!listElement) return;
  listElement.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const smithing = getSkill("smithing");

  tools.forEach((tool) => {
    if (!tool.cost || !Object.keys(tool.cost).length) return;

    const li = document.createElement("li");
    li.className = "action-list__item";

    const summary = document.createElement("div");
    summary.className = "action-list__summary";

    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = tool.name;
    const costLine = document.createElement("p");
    costLine.textContent = `${formatCost(tool.cost)} • +${formatNumber(tool.xp)} xp`;
    info.appendChild(title);
    info.appendChild(costLine);

    const usageLine = document.createElement("p");
    usageLine.className = "action-list__meta";
    if (type === "pickaxe") {
      usageLine.textContent = `Use: Mining level ${tool.miningLevelRequirement}`;
    } else {
      usageLine.textContent = `Use: Woodcutting level ${tool.woodcuttingLevelRequirement}`;
    }
    info.appendChild(usageLine);

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.action = type === "pickaxe" ? "forge-pickaxe" : "forge-axe";
    button.dataset.id = tool.id;
    const alreadyOwned = type === "pickaxe"
      ? state.ownedPickaxes.has(tool.id)
      : state.ownedAxes.has(tool.id);
    button.textContent = alreadyOwned ? "Forged" : "Forge";

    const meetsLevel = smithing.level >= tool.smithingLevelRequirement;
    const hasResources = Object.entries(tool.cost).every(([resourceId, amount]) => {
      return (state.inventory[resourceId] || 0) >= amount;
    });

    button.disabled = alreadyOwned || !meetsLevel || !hasResources;

    summary.appendChild(info);
    summary.appendChild(button);
    li.appendChild(summary);

    const messages = [];
    if (alreadyOwned) {
      messages.push("Already forged.");
    }
    if (!meetsLevel) {
      messages.push(`Requires smithing level ${tool.smithingLevelRequirement}.`);
    }
    if (!hasResources) {
      Object.entries(tool.cost).forEach(([resourceId, amount]) => {
        const owned = state.inventory[resourceId] || 0;
        if (owned < amount) {
          messages.push(
            `Need ${amount} ${getResourceName(resourceId)} (have ${formatNumber(owned)}).`
          );
        }
      });
    }
    if (!messages.length) {
      messages.push("All requirements met.");
    }

    const note = document.createElement("p");
    note.className = "action-list__note";
    if (messages.some((message) => message.startsWith("Need") || message.startsWith("Requires"))) {
      note.classList.add("action-list__note--warn");
    }
    note.textContent = messages.join(" ");
    li.appendChild(note);

    fragment.appendChild(li);
  });

  listElement.appendChild(fragment);
}

function handleSmithingAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "smelt") {
    attemptSmelt(id);
  } else if (action === "forge-pickaxe") {
    attemptForge("pickaxe", id);
  } else if (action === "forge-axe") {
    attemptForge("axe", id);
  }
}

function attemptSmelt(recipeId) {
  const recipe = SMELTING_RECIPES.find((entry) => entry.id === recipeId);
  if (!recipe) return;
  const smithing = getSkill("smithing");
  if (smithing.level < recipe.levelRequirement) {
    pushLog(`You need smithing level ${recipe.levelRequirement} to smelt ${recipe.name}.`);
    return;
  }
  if ((state.inventory[recipe.oreId] || 0) < recipe.oreAmount) {
    pushLog(`You need more ${getResourceName(recipe.oreId)} to smelt ${recipe.name}.`);
    return;
  }

  state.inventory[recipe.oreId] -= recipe.oreAmount;
  state.inventory[recipe.id] = (state.inventory[recipe.id] || 0) + 1;
  pushLog(`You smelt ${recipe.name} and earn ${formatNumber(recipe.xp)} smithing xp.`);
  gainSkillXp("smithing", recipe.xp);
  renderInventory();
  renderSmithingOptions();
}

function attemptForge(type, toolId) {
  const smithing = getSkill("smithing");
  const collection = type === "pickaxe" ? PICKAXES : AXES;
  const ownedSet = type === "pickaxe" ? state.ownedPickaxes : state.ownedAxes;
  const tool = collection.find((entry) => entry.id === toolId);
  if (!tool) return;

  if (ownedSet.has(tool.id)) {
    pushLog(`You already possess the ${tool.name}.`);
    return;
  }

  if (smithing.level < tool.smithingLevelRequirement) {
    pushLog(`You need smithing level ${tool.smithingLevelRequirement} to forge a ${tool.name}.`);
    return;
  }

  const missing = Object.entries(tool.cost).filter(([resourceId, amount]) => {
    return (state.inventory[resourceId] || 0) < amount;
  });

  if (missing.length) {
    const needs = missing
      .map(
        ([resourceId, amount]) =>
          `${amount} ${getResourceName(resourceId)} (have ${formatNumber(state.inventory[resourceId] || 0)})`
      )
      .join(", ");
    pushLog(`You lack materials: ${needs}.`);
    return;
  }

  Object.entries(tool.cost).forEach(([resourceId, amount]) => {
    state.inventory[resourceId] -= amount;
  });

  ownedSet.add(tool.id);
  if (type === "pickaxe") {
    state.equipment.pickaxeId = tool.id;
    refreshEquipmentLabels();
    updateMiningStats();
  } else {
    state.equipment.axeId = tool.id;
    refreshEquipmentLabels();
    updateWoodcuttingStats();
  }

  pushLog(`You forge a ${tool.name}, gaining ${formatNumber(tool.xp)} smithing xp.`);
  gainSkillXp("smithing", tool.xp);
  renderInventory();
  renderSmithingOptions();
}

function formatCost(cost) {
  return Object.entries(cost)
    .map(([resourceId, amount]) => `${amount} ${getResourceName(resourceId)}`)
    .join(" + ");
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
      const miningLevel =
        slot.data?.skills?.mining?.level ?? slot.data?.miningSkill?.level ?? 1;
      const smithingLevel = slot.data?.skills?.smithing?.level ?? 1;
      slotDetails.textContent = `${slot.name} • Min ${miningLevel} / Sm ${smithingLevel} • ${
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
  cancelWoodcuttingCycle();
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
    version: 2,
    inventory: { ...state.inventory },
    skills: {
      mining: { level: state.skills.mining.level, xp: state.skills.mining.xp },
      smithing: { level: state.skills.smithing.level, xp: state.skills.smithing.xp },
      woodcutting: { level: state.skills.woodcutting.level, xp: state.skills.woodcutting.xp },
    },
    equipment: { ...state.equipment },
    ownedPickaxes: Array.from(state.ownedPickaxes),
    ownedAxes: Array.from(state.ownedAxes),
    currentStoneId: state.currentStoneId,
    currentTreeId: state.currentTreeId,
    autoContinue: { ...state.autoContinue },
    log: state.log.slice(),
  };
}

function applySaveData(data) {
  Object.assign(state.inventory, createInitialInventory(), data.inventory || {});

  const savedSkills = data.skills || {};
  ["mining", "smithing", "woodcutting"].forEach((skillId) => {
    const target = getSkill(skillId);
    const saved = savedSkills[skillId] || {};
    target.level = Math.min(MAX_LEVEL, Math.max(1, saved.level ?? 1));
    target.xpToNext = getXpToNext(target.level);
    if (target.level >= MAX_LEVEL) {
      target.xp = 0;
      target.xpToNext = 0;
    } else {
      target.xp = Math.min(saved.xp ?? 0, target.xpToNext);
    }
  });

  const miningSkill = getSkill("mining");
  const requestedStone = data.currentStoneId || STONES[0].id;
  const unlockedStone =
    STONES.find(
      (stone) => stone.id === requestedStone && miningSkill.level >= stone.levelRequirement
    ) ||
    [...STONES]
      .reverse()
      .find((stone) => miningSkill.level >= stone.levelRequirement) ||
    STONES[0];
  state.currentStoneId = unlockedStone.id;

  const woodSkill = getSkill("woodcutting");
  const requestedTree = data.currentTreeId || TREES[0].id;
  const unlockedTree =
    TREES.find((tree) => tree.id === requestedTree && woodSkill.level >= tree.levelRequirement) ||
    [...TREES]
      .reverse()
      .find((tree) => woodSkill.level >= tree.levelRequirement) ||
    TREES[0];
  state.currentTreeId = unlockedTree.id;

  state.autoContinue = {
    mining: data.autoContinue?.mining ?? true,
    woodcutting: data.autoContinue?.woodcutting ?? true,
  };
  if (elements.autoContinueMining) {
    elements.autoContinueMining.checked = state.autoContinue.mining;
  }
  if (elements.autoContinueWood) {
    elements.autoContinueWood.checked = state.autoContinue.woodcutting;
  }

  const equipment = data.equipment || {};
  state.equipment.pickaxeId = PICKAXES.some((pickaxe) => pickaxe.id === equipment.pickaxeId)
    ? equipment.pickaxeId
    : PICKAXES[0].id;
  state.equipment.axeId = AXES.some((axe) => axe.id === equipment.axeId)
    ? equipment.axeId
    : AXES[0].id;

  state.ownedPickaxes = new Set(
    Array.isArray(data.ownedPickaxes) && data.ownedPickaxes.length
      ? data.ownedPickaxes
      : [state.equipment.pickaxeId, PICKAXES[0].id]
  );
  state.ownedPickaxes.add(state.equipment.pickaxeId);
  state.ownedAxes = new Set(
    Array.isArray(data.ownedAxes) && data.ownedAxes.length
      ? data.ownedAxes
      : [state.equipment.axeId, AXES[0].id]
  );
  state.ownedAxes.add(state.equipment.axeId);

  state.log = Array.isArray(data.log) ? data.log.slice(0, state.logLimit) : [];

  refreshEquipmentLabels();
  renderInventory();
  renderLog();
  renderStoneOptions();
  renderTreeOptions();
  updateResourceDetails();
  updateTreeDetails();
  updateSkillDisplays();
  updateMiningStats();
  updateWoodcuttingStats();
  renderSmithingOptions();
}
