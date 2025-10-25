const state = {
  pickaxe: {
    name: "Standard Pickaxe",
    baseYield: [1, 2],
    swingDurationMs: 4000,
  },
  mining: {
    active: false,
    startTime: 0,
    timerId: null,
  },
  inventory: {
    stone: 0,
  },
  autoContinue: true,
  log: [],
  logLimit: 9,
};

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
  elements.stoneCount = document.getElementById("stone-count");
  elements.stoneLedger = document.getElementById("stone-ledger");
  elements.pickaxeName = document.getElementById("pickaxe-name");
  elements.topPickaxeName = document.getElementById("top-pickaxe-name");
  elements.autoContinue = document.getElementById("auto-continue");
  elements.logEntries = document.getElementById("log-entries");
  elements.swingDuration = document.getElementById("swing-duration");
  elements.topSwingDuration = document.getElementById("top-swing-duration");
  elements.yieldRange = document.getElementById("yield-range");
  elements.tabButtons = document.querySelectorAll("[data-tab-target]");
  elements.tabPanels = document.querySelectorAll("[data-tab-panel]");

  elements.mineButton.addEventListener("click", toggleMining);
  elements.autoContinue.addEventListener("change", (event) => {
    state.autoContinue = event.target.checked;
  });

  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.tabTarget);
    });
  });

  elements.pickaxeName.textContent = state.pickaxe.name;
  const swingSeconds = (state.pickaxe.swingDurationMs / 1000).toFixed(0);
  elements.swingDuration.textContent = swingSeconds;
  elements.yieldRange.textContent = state.pickaxe.baseYield[1];

  updateTopReadouts({ swingSeconds });
  renderInventory();
  renderLog();

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

  state.mining.active = true;
  state.mining.startTime = performance.now();
  elements.mineButton.textContent = "Stop Mining";
  elements.mineButton.disabled = false;
  updateProgressLabel("Working");
  tickMining();
}

function cancelMiningCycle(message) {
  state.mining.active = false;
  if (state.mining.timerId) {
    cancelAnimationFrame(state.mining.timerId);
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
    const duration = state.pickaxe.swingDurationMs;
    const progress = Math.min(1, elapsed / duration);

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
  elements.mineButton.textContent = state.autoContinue
    ? "Preparing next swing"
    : "Start Mining";
  elements.mineButton.disabled = state.autoContinue;
  updateProgressLabel("Hauling");

  const haul = calculateYield();
  state.inventory.stone += haul;
  renderInventory();
  pushLog(`You pry loose ${haul} stone chunk${haul === 1 ? "" : "s"}.`);

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

function calculateYield() {
  const [min, max] = state.pickaxe.baseYield;
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderInventory() {
  elements.stoneCount.textContent = state.inventory.stone;
  if (elements.stoneLedger) {
    elements.stoneLedger.textContent = state.inventory.stone;
  }
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

function updateTopReadouts({ swingSeconds } = {}) {
  if (elements.topPickaxeName) {
    elements.topPickaxeName.textContent = state.pickaxe.name;
  }
  if (elements.topSwingDuration) {
    const seconds = swingSeconds || (state.pickaxe.swingDurationMs / 1000).toFixed(0);
    elements.topSwingDuration.textContent = seconds;
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
