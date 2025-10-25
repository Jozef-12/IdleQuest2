const STORAGE_KEY = "idleQuarry.saveSlots.v1";
const SAVE_SLOT_COUNT = 5;
const MAX_LEVEL = 99;

const STONES = [
  {
    id: "stone",
    name: "Stone",
    icon: "🪨",
    description: "Reliable building blocks that keep the crew sharp.",
    levelRequirement: 1,
    yield: [1, 2],
    baseSwingDurationMs: 4000,
    xp: 25,
  },
  {
    id: "copper",
    name: "Copper Ore",
    icon: "🥉",
    description: "Warm streaks of metal that smelt into sturdy fittings.",
    levelRequirement: 5,
    yield: [1, 2],
    baseSwingDurationMs: 5200,
    xp: 45,
  },
  {
    id: "iron",
    name: "Iron Ore",
    icon: "⛓️",
    description: "Dense seams demanding a steady rhythm to break free.",
    levelRequirement: 10,
    yield: [1, 2],
    baseSwingDurationMs: 6000,
    xp: 60,
  },
  {
    id: "silver",
    name: "Silver Vein",
    icon: "🥈",
    description: "Shimmering veins prized by jewelers and nobles alike.",
    levelRequirement: 20,
    yield: [1, 3],
    baseSwingDurationMs: 6800,
    xp: 85,
  },
  {
    id: "gold",
    name: "Gold Deposit",
    icon: "🥇",
    description: "Heavy nuggets that test the crew's endurance.",
    levelRequirement: 30,
    yield: [1, 2],
    baseSwingDurationMs: 7600,
    xp: 110,
  },
  {
    id: "emerald",
    name: "Emerald Cluster",
    icon: "💚",
    description: "Brilliant greens guarded by stubborn rock.",
    levelRequirement: 45,
    yield: [1, 2],
    baseSwingDurationMs: 8600,
    xp: 150,
  },
  {
    id: "diamond",
    name: "Diamond Core",
    icon: "💎",
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
    icon: "🟥",
    oreId: "copper",
    oreAmount: 3,
    levelRequirement: 1,
    xp: 45,
    baseDurationMs: 4200,
  },
  {
    id: "iron_bar",
    name: "Iron Bar",
    icon: "⬛",
    oreId: "iron",
    oreAmount: 4,
    levelRequirement: 10,
    xp: 70,
    baseDurationMs: 5200,
  },
  {
    id: "silver_bar",
    name: "Silver Bar",
    icon: "⬜",
    oreId: "silver",
    oreAmount: 5,
    levelRequirement: 20,
    xp: 110,
    baseDurationMs: 6000,
  },
  {
    id: "gold_bar",
    name: "Gold Bar",
    icon: "🟨",
    oreId: "gold",
    oreAmount: 6,
    levelRequirement: 30,
    xp: 165,
    baseDurationMs: 6800,
  },
  {
    id: "emerald_inlay",
    name: "Emerald Inlay",
    icon: "🟢",
    oreId: "emerald",
    oreAmount: 8,
    levelRequirement: 45,
    xp: 240,
    baseDurationMs: 7600,
  },
  {
    id: "diamond_edge",
    name: "Diamond Edge",
    icon: "🔷",
    oreId: "diamond",
    oreAmount: 10,
    levelRequirement: 60,
    xp: 320,
    baseDurationMs: 8200,
  },
];

const TREES = [
  {
    id: "spruce",
    name: "Spruce Copse",
    logId: "spruce_log",
    logName: "Spruce Log",
    icon: "🌲",
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
    icon: "🌳",
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
    icon: "🌰",
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
    icon: "🍃",
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
    icon: "🍁",
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
    icon: "🪵",
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
    icon: "🌿",
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
    icon: "🟣",
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
    icon: "🟥",
    description: "Towering redwoods that demand a seasoned woodsman.",
    levelRequirement: 70,
    yield: [1, 2],
    baseSwingDurationMs: 8400,
    xp: 280,
  },
];

const PICKAXES = [
  {
    id: "worn_pickaxe",
    name: "Worn Pickaxe",
    icon: "⛏️",
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
    icon: "⛏️",
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
    icon: "⛏️",
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
    icon: "⛏️",
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
    icon: "⛏️",
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
    icon: "⛏️",
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
    icon: "⛏️",
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
    icon: "🪓",
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
    icon: "🪓",
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
    icon: "🪓",
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
    icon: "🪓",
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
    icon: "🪓",
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
    icon: "🪓",
    woodcuttingLevelRequirement: 65,
    smithingLevelRequirement: 55,
    speedMultiplier: 1.8,
    yieldMultiplier: 1.6,
    cost: { diamond_edge: 2, emerald_inlay: 3 },
    xp: 520,
  },
];

const FISHING_SPOTS = [
  {
    id: "shallow_pond",
    name: "Shallow Pond",
    fishId: "minnow",
    fishName: "Minnow",
    icon: "🐟",
    description: "A calm pond perfect for first casts.",
    levelRequirement: 1,
    yield: [1, 2],
    baseCastDurationMs: 5200,
    baitCost: 1,
    xp: 35,
    rareChance: 0.04,
  },
  {
    id: "river_run",
    name: "River Run",
    fishId: "river_trout",
    fishName: "River Trout",
    icon: "🐠",
    description: "Swift water filled with lively trout.",
    levelRequirement: 7,
    yield: [1, 2],
    baseCastDurationMs: 6200,
    baitCost: 1,
    xp: 55,
    rareChance: 0.06,
  },
  {
    id: "highland_lake",
    name: "Highland Lake",
    fishId: "lake_salmon",
    fishName: "Lake Salmon",
    icon: "🧈",
    description: "A clear lake where salmon leap at dusk.",
    levelRequirement: 16,
    yield: [1, 3],
    baseCastDurationMs: 7200,
    baitCost: 2,
    xp: 85,
    rareChance: 0.08,
  },
  {
    id: "midnight_grotto",
    name: "Midnight Grotto",
    fishId: "shadow_eel",
    fishName: "Shadow Eel",
    icon: "🐍",
    description: "A hidden cove where bioluminescent eels drift.",
    levelRequirement: 28,
    yield: [1, 2],
    baseCastDurationMs: 8200,
    baitCost: 2,
    xp: 120,
    rareChance: 0.12,
  },
];

const FISHING_RODS = [
  {
    id: "worn_rod",
    name: "Worn Rod",
    icon: "🎣",
    fishingLevelRequirement: 1,
    smithingLevelRequirement: 1,
    speedMultiplier: 1,
    yieldMultiplier: 1,
    cost: {},
    xp: 0,
  },
  {
    id: "oak_rod",
    name: "Oak Rod",
    icon: "🎣",
    fishingLevelRequirement: 5,
    smithingLevelRequirement: 6,
    speedMultiplier: 1.12,
    yieldMultiplier: 1.1,
    cost: { birch_log: 4, copper_bar: 2 },
    xp: 95,
  },
  {
    id: "reinforced_rod",
    name: "Reinforced Rod",
    icon: "🎣",
    fishingLevelRequirement: 14,
    smithingLevelRequirement: 18,
    speedMultiplier: 1.25,
    yieldMultiplier: 1.22,
    cost: { iron_bar: 4, willow_log: 3 },
    xp: 180,
  },
  {
    id: "seafarer_rod",
    name: "Seafarer Rod",
    icon: "🎣",
    fishingLevelRequirement: 26,
    smithingLevelRequirement: 30,
    speedMultiplier: 1.45,
    yieldMultiplier: 1.35,
    cost: { silver_bar: 4, maple_log: 4, leather_wrap: 2 },
    xp: 260,
  },
  {
    id: "mythril_rod",
    name: "Mythril Rod",
    icon: "🎣",
    fishingLevelRequirement: 40,
    smithingLevelRequirement: 44,
    speedMultiplier: 1.65,
    yieldMultiplier: 1.5,
    cost: { gold_bar: 4, emerald_inlay: 2, leather_wrap: 4 },
    xp: 360,
  },
];

const COOKING_RECIPES = [
  {
    id: "pan_seared_minnow",
    name: "Pan-seared Minnow",
    rawId: "minnow",
    cookedId: "cooked_minnow",
    icon: "🍢",
    levelRequirement: 1,
    baseDurationMs: 3600,
    xp: 45,
    description: "Quick and crispy, a camp favorite.",
  },
  {
    id: "herbed_trout",
    name: "Herbed Trout",
    rawId: "river_trout",
    cookedId: "cooked_trout",
    icon: "🍣",
    levelRequirement: 6,
    baseDurationMs: 4200,
    xp: 70,
    description: "Trout grilled with wild herbs.",
  },
  {
    id: "glazed_salmon",
    name: "Glazed Salmon",
    rawId: "lake_salmon",
    cookedId: "cooked_salmon",
    icon: "🍱",
    levelRequirement: 15,
    baseDurationMs: 5200,
    xp: 110,
    description: "Lake salmon finished with sweet glaze.",
  },
  {
    id: "shadow_eel_stew",
    name: "Shadow Eel Stew",
    rawId: "shadow_eel",
    cookedId: "cooked_eel",
    icon: "🥘",
    levelRequirement: 24,
    baseDurationMs: 6200,
    xp: 160,
    description: "A rich stew that glows faintly at night.",
  },
  {
    id: "ember_roast_chicken",
    name: "Ember-roast Chicken",
    rawId: "raw_chicken",
    cookedId: "cooked_chicken",
    icon: "🍗",
    levelRequirement: 12,
    baseDurationMs: 5600,
    xp: 95,
    description: "Juicy chicken seared with campfire spices.",
  },
  {
    id: "seared_highland_steak",
    name: "Seared Highland Steak",
    rawId: "raw_beef",
    cookedId: "cooked_beef",
    icon: "🥩",
    levelRequirement: 20,
    baseDurationMs: 6400,
    xp: 145,
    description: "Thick-cut steak finished with maple glaze.",
  },
  {
    id: "herbal_game_chops",
    name: "Herbal Game Chops",
    rawId: "raw_game",
    cookedId: "cooked_chops",
    icon: "🍖",
    levelRequirement: 28,
    baseDurationMs: 6800,
    xp: 185,
    description: "Wild game slow-cooked with fragrant herbs.",
  },
];

const COMBAT_FOOD_HEALING = {
  cooked_minnow: 12,
  cooked_trout: 18,
  cooked_salmon: 26,
  cooked_eel: 34,
  cooked_chicken: 28,
  cooked_beef: 34,
  cooked_chops: 42,
};

const RARE_BOX_REWARDS = [
  { id: "silver", min: 2, max: 4 },
  { id: "gold", min: 1, max: 3 },
  { id: "emerald", min: 1, max: 2 },
  { id: "diamond", min: 1, max: 1 },
  { id: "silver_bar", min: 1, max: 2 },
  { id: "gold_bar", min: 1, max: 2 },
  { id: "emerald_inlay", min: 1, max: 1 },
  { id: "diamond_edge", min: 1, max: 1 },
];

const LOOT_ITEMS = [
  { id: "feather", name: "Feather", icon: "🪶" },
  { id: "bones", name: "Bones", icon: "🦴" },
  { id: "raw_chicken", name: "Raw Chicken", icon: "🐔" },
  { id: "raw_beef", name: "Raw Beef", icon: "🐄" },
  { id: "raw_game", name: "Raw Game Meat", icon: "🦌" },
  { id: "beast_hide", name: "Beast Hide", icon: "🧥" },
  { id: "mystic_shard", name: "Mystic Shard", icon: "🔮" },
  { id: "rare_token", name: "Heroic Emblem", icon: "🏅" },
  { id: "cooked_chicken", name: "Roasted Chicken", icon: "🍗" },
  { id: "cooked_beef", name: "Seared Steak", icon: "🥩" },
  { id: "cooked_chops", name: "Herbed Chops", icon: "🍖" },
];

const WEAPONS = [
  {
    id: "training_blade",
    name: "Training Blade",
    icon: "⚔️",
    smithingLevelRequirement: 1,
    attackLevelRequirement: 1,
    strengthLevelRequirement: 1,
    accuracyBonus: 0,
    strengthBonus: 0,
    speedMultiplier: 1,
    cost: {},
    xp: 0,
  },
  {
    id: "bronze_saber",
    name: "Bronze Saber",
    icon: "🗡️",
    smithingLevelRequirement: 8,
    attackLevelRequirement: 5,
    strengthLevelRequirement: 5,
    accuracyBonus: 6,
    strengthBonus: 4,
    speedMultiplier: 1.05,
    cost: { copper_bar: 5, spruce_log: 2 },
    xp: 120,
  },
  {
    id: "iron_claymore",
    name: "Iron Claymore",
    icon: "⚔️",
    smithingLevelRequirement: 16,
    attackLevelRequirement: 12,
    strengthLevelRequirement: 12,
    accuracyBonus: 9,
    strengthBonus: 7,
    speedMultiplier: 1.08,
    cost: { iron_bar: 6, birch_log: 3 },
    xp: 180,
  },
  {
    id: "steel_falchion",
    name: "Steel Falchion",
    icon: "🗡️",
    smithingLevelRequirement: 28,
    attackLevelRequirement: 20,
    strengthLevelRequirement: 20,
    accuracyBonus: 13,
    strengthBonus: 11,
    speedMultiplier: 1.12,
    cost: { silver_bar: 5, maple_log: 3, beast_hide: 2 },
    xp: 260,
  },
  {
    id: "mythril_edge",
    name: "Mythril Edge",
    icon: "⚔️",
    smithingLevelRequirement: 40,
    attackLevelRequirement: 32,
    strengthLevelRequirement: 32,
    accuracyBonus: 18,
    strengthBonus: 16,
    speedMultiplier: 1.18,
    cost: { gold_bar: 6, emerald_inlay: 2, beast_hide: 3 },
    xp: 340,
  },
  {
    id: "dragonfang_blade",
    name: "Dragonfang Blade",
    icon: "🗡️",
    smithingLevelRequirement: 55,
    attackLevelRequirement: 45,
    strengthLevelRequirement: 45,
    accuracyBonus: 24,
    strengthBonus: 22,
    speedMultiplier: 1.25,
    cost: { diamond_edge: 2, emerald_inlay: 3, mystic_shard: 2 },
    xp: 460,
  },
];

const ARMORS = [
  {
    id: "training_tunic",
    name: "Training Tunic",
    icon: "🛡️",
    smithingLevelRequirement: 1,
    defenseLevelRequirement: 1,
    hitpointsLevelRequirement: 1,
    defenseBonus: 4,
    hitpointsBonus: 6,
    cost: {},
    xp: 0,
  },
  {
    id: "bronze_plate",
    name: "Bronze Plate",
    icon: "🛡️",
    smithingLevelRequirement: 8,
    defenseLevelRequirement: 5,
    hitpointsLevelRequirement: 5,
    defenseBonus: 9,
    hitpointsBonus: 10,
    cost: { copper_bar: 6, spruce_log: 2 },
    xp: 140,
  },
  {
    id: "iron_guard",
    name: "Iron Guard",
    icon: "🛡️",
    smithingLevelRequirement: 18,
    defenseLevelRequirement: 12,
    hitpointsLevelRequirement: 12,
    defenseBonus: 14,
    hitpointsBonus: 15,
    cost: { iron_bar: 6, birch_log: 2, beast_hide: 2 },
    xp: 210,
  },
  {
    id: "steel_vanguard",
    name: "Steel Vanguard",
    icon: "🛡️",
    smithingLevelRequirement: 32,
    defenseLevelRequirement: 22,
    hitpointsLevelRequirement: 22,
    defenseBonus: 20,
    hitpointsBonus: 22,
    cost: { silver_bar: 6, maple_log: 3, beast_hide: 3 },
    xp: 300,
  },
  {
    id: "mythril_bulwark",
    name: "Mythril Bulwark",
    icon: "🛡️",
    smithingLevelRequirement: 44,
    defenseLevelRequirement: 32,
    hitpointsLevelRequirement: 32,
    defenseBonus: 27,
    hitpointsBonus: 28,
    cost: { gold_bar: 6, emerald_inlay: 2, mystic_shard: 1 },
    xp: 380,
  },
  {
    id: "dragonhide_aegis",
    name: "Dragonhide Aegis",
    icon: "🛡️",
    smithingLevelRequirement: 58,
    defenseLevelRequirement: 45,
    hitpointsLevelRequirement: 45,
    defenseBonus: 36,
    hitpointsBonus: 34,
    cost: { diamond_edge: 2, emerald_inlay: 3, beast_hide: 5 },
    xp: 520,
  },
];

const COMBAT_AREAS = [
  {
    id: "grasslands",
    name: "Verdant Grasslands",
    description: "Gentle fields roamed by docile creatures.",
    levelRequirement: 1,
    monsters: [
      {
        id: "field_chicken",
        name: "Field Chicken",
        icon: "🐔",
        levelRequirement: 1,
        maxHp: 24,
        attack: 6,
        defense: 4,
        accuracy: 10,
        attackSpeedMs: 2600,
        xp: 40,
        coins: [4, 8],
        drops: [
          { itemId: "feather", min: 1, max: 3, chance: 0.7, rarity: "common" },
          { itemId: "raw_chicken", min: 1, max: 1, chance: 0.55, rarity: "common" },
          { itemId: "bones", min: 1, max: 2, chance: 0.35, rarity: "uncommon" },
        ],
      },
      {
        id: "pasture_cow",
        name: "Pasture Cow",
        icon: "🐄",
        levelRequirement: 5,
        maxHp: 32,
        attack: 10,
        defense: 8,
        accuracy: 12,
        attackSpeedMs: 3000,
        xp: 55,
        coins: [6, 12],
        drops: [
          { itemId: "raw_beef", min: 1, max: 2, chance: 0.6, rarity: "common" },
          { itemId: "bones", min: 1, max: 2, chance: 0.4, rarity: "uncommon" },
          { itemId: "beast_hide", min: 1, max: 1, chance: 0.25, rarity: "uncommon" },
        ],
      },
    ],
  },
  {
    id: "woodland_edge",
    name: "Woodland Edge",
    description: "The treeline hides territorial beasts.",
    levelRequirement: 12,
    monsters: [
      {
        id: "forest_boar",
        name: "Forest Boar",
        icon: "🐗",
        levelRequirement: 12,
        maxHp: 38,
        attack: 16,
        defense: 10,
        accuracy: 16,
        attackSpeedMs: 2600,
        xp: 72,
        coins: [8, 16],
        drops: [
          { itemId: "raw_game", min: 1, max: 2, chance: 0.6, rarity: "common" },
          { itemId: "beast_hide", min: 1, max: 2, chance: 0.45, rarity: "uncommon" },
          { itemId: "bones", min: 1, max: 2, chance: 0.4, rarity: "uncommon" },
        ],
      },
      {
        id: "shadow_wolf",
        name: "Shadow Wolf",
        icon: "🐺",
        levelRequirement: 16,
        maxHp: 42,
        attack: 20,
        defense: 14,
        accuracy: 20,
        attackSpeedMs: 2400,
        xp: 90,
        coins: [10, 20],
        drops: [
          { itemId: "beast_hide", min: 1, max: 2, chance: 0.55, rarity: "uncommon" },
          { itemId: "raw_game", min: 1, max: 2, chance: 0.5, rarity: "common" },
          { itemId: "mystic_shard", min: 1, max: 1, chance: 0.15, rarity: "rare" },
        ],
      },
    ],
  },
  {
    id: "riverlands",
    name: "Riverlands",
    description: "Raiders and scaled creatures prowl the banks.",
    levelRequirement: 22,
    monsters: [
      {
        id: "bandit_raider",
        name: "Bandit Raider",
        icon: "🗡️",
        levelRequirement: 22,
        maxHp: 48,
        attack: 24,
        defense: 16,
        accuracy: 24,
        attackSpeedMs: 2300,
        xp: 120,
        coins: [14, 26],
        drops: [
          { itemId: "beast_hide", min: 1, max: 2, chance: 0.4, rarity: "uncommon" },
          { itemId: "rare_token", min: 1, max: 1, chance: 0.12, rarity: "rare" },
        ],
      },
      {
        id: "scaleback_serpent",
        name: "Scaleback Serpent",
        icon: "🐉",
        levelRequirement: 26,
        maxHp: 54,
        attack: 27,
        defense: 20,
        accuracy: 28,
        attackSpeedMs: 2200,
        xp: 140,
        coins: [16, 30],
        drops: [
          { itemId: "mystic_shard", min: 1, max: 1, chance: 0.2, rarity: "rare" },
          { itemId: "bones", min: 1, max: 3, chance: 0.45, rarity: "uncommon" },
        ],
      },
    ],
  },
  {
    id: "mountain_pass",
    name: "Mountain Pass",
    description: "Thin air and relentless guardians test travelers.",
    levelRequirement: 32,
    monsters: [
      {
        id: "stone_golem",
        name: "Stone Golem",
        icon: "🪨",
        levelRequirement: 32,
        maxHp: 62,
        attack: 30,
        defense: 26,
        accuracy: 26,
        attackSpeedMs: 2600,
        xp: 180,
        coins: [18, 34],
        drops: [
          { itemId: "mystic_shard", min: 1, max: 2, chance: 0.25, rarity: "rare" },
          { itemId: "bones", min: 2, max: 4, chance: 0.35, rarity: "uncommon" },
        ],
      },
      {
        id: "storm_harpy",
        name: "Storm Harpy",
        icon: "🪽",
        levelRequirement: 36,
        maxHp: 58,
        attack: 34,
        defense: 24,
        accuracy: 34,
        attackSpeedMs: 2000,
        xp: 210,
        coins: [20, 38],
        drops: [
          { itemId: "feather", min: 2, max: 4, chance: 0.7, rarity: "common" },
          { itemId: "rare_token", min: 1, max: 1, chance: 0.18, rarity: "rare" },
        ],
      },
    ],
  },
  {
    id: "ember_depths",
    name: "Ember Depths",
    description: "Molten caverns where legends are forged.",
    levelRequirement: 45,
    monsters: [
      {
        id: "ember_wyrm",
        name: "Ember Wyrm",
        icon: "🐲",
        levelRequirement: 45,
        maxHp: 78,
        attack: 40,
        defense: 32,
        accuracy: 38,
        attackSpeedMs: 2100,
        xp: 260,
        coins: [24, 48],
        drops: [
          { itemId: "mystic_shard", min: 1, max: 2, chance: 0.32, rarity: "rare" },
          { itemId: "raw_game", min: 1, max: 2, chance: 0.5, rarity: "common" },
          { itemId: "rare_token", min: 1, max: 1, chance: 0.24, rarity: "rare" },
        ],
      },
      {
        id: "ashen_colossus",
        name: "Ashen Colossus",
        icon: "🗿",
        levelRequirement: 52,
        maxHp: 88,
        attack: 44,
        defense: 38,
        accuracy: 42,
        attackSpeedMs: 2400,
        xp: 320,
        coins: [28, 55],
        drops: [
          { itemId: "diamond", min: 1, max: 2, chance: 0.25, rarity: "rare" },
          { itemId: "mystic_shard", min: 1, max: 2, chance: 0.28, rarity: "rare" },
          { itemId: "beast_hide", min: 2, max: 3, chance: 0.4, rarity: "uncommon" },
        ],
      },
    ],
  },
];

const FOOD_HEALING = {
  cooked_minnow: 12,
  cooked_trout: 18,
  cooked_salmon: 26,
  cooked_eel: 34,
  cooked_chicken: 24,
  cooked_beef: 32,
  cooked_chops: 36,
  raw_chicken: 8,
  raw_beef: 10,
  raw_game: 12,
};

const BASE_ATTACK_INTERVAL = 2400;

const MARKET_SELL_VALUES = {
  stone: 2,
  copper: 4,
  iron: 6,
  silver: 10,
  gold: 18,
  emerald: 28,
  diamond: 45,
  spruce_log: 3,
  birch_log: 4,
  oak_log: 5,
  willow_log: 7,
  maple_log: 9,
  ash_log: 12,
  yew_log: 16,
  elder_log: 24,
  redwood_log: 40,
  copper_bar: 15,
  iron_bar: 22,
  silver_bar: 40,
  gold_bar: 65,
  emerald_inlay: 120,
  diamond_edge: 190,
  minnow: 6,
  river_trout: 10,
  lake_salmon: 16,
  shadow_eel: 26,
  cooked_minnow: 14,
  cooked_trout: 22,
  cooked_salmon: 34,
  cooked_eel: 50,
  worn_pickaxe_item: 0,
  worn_hatchet_item: 0,
  worn_rod_item: 0,
  anglers_cache: 0,
};

const MARKET_BUY_ITEMS = [
  {
    id: "fishing_bait",
    name: "Fishing Bait",
    description: "Essential for every cast.",
    cost: 3,
    quantity: 5,
  },
  {
    id: "leather_wrap",
    name: "Leather Wrap",
    description: "Used to craft premium rods.",
    cost: 18,
    quantity: 1,
  },
  {
    id: "camp_spice",
    name: "Camp Spice Pouch",
    description: "Adds flavor to cooked meals for bonus coin value.",
    cost: 22,
    quantity: 1,
  },
];

const RESOURCE_REGISTRY = {};
const ICON_REGISTRY = {};

function registerResource(id, name, icon) {
  RESOURCE_REGISTRY[id] = name;
  if (icon) {
    ICON_REGISTRY[id] = icon;
  }
}

function registerIcon(id, icon) {
  if (icon) {
    ICON_REGISTRY[id] = icon;
  }
}

STONES.forEach((stone) => registerResource(stone.id, stone.name, stone.icon));
SMELTING_RECIPES.forEach((recipe) => registerResource(recipe.id, recipe.name, recipe.icon));
TREES.forEach((tree) => registerResource(tree.logId, tree.logName, tree.icon));
FISHING_SPOTS.forEach((spot) => registerResource(spot.fishId, spot.fishName, spot.icon));
COOKING_RECIPES.forEach((recipe) => {
  registerResource(recipe.rawId, getResourceName(recipe.rawId) || recipe.rawId);
  registerResource(recipe.cookedId, recipe.name, recipe.icon);
});
FISHING_RODS.forEach((rod) => registerResource(`${rod.id}_item`, rod.name, rod.icon));
registerResource("fishing_bait", "Fishing Bait", "🪱");
registerResource("leather_wrap", "Leather Wrap", "🧵");
registerResource("camp_spice", "Camp Spice Pouch", "🧂");
registerResource("anglers_cache", "Angler's Cache", "🎁");
registerResource("worn_pickaxe_item", "Worn Pickaxe", "⛏️");
registerResource("worn_hatchet_item", "Worn Hatchet", "🪓");
registerResource("worn_rod_item", "Worn Rod", "🎣");
LOOT_ITEMS.forEach((item) => registerResource(item.id, item.name, item.icon));
WEAPONS.forEach((weapon) => registerResource(`${weapon.id}_item`, weapon.name, weapon.icon));
ARMORS.forEach((armor) => registerResource(`${armor.id}_item`, armor.name, armor.icon));

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
  {
    title: "Fish & Bait",
    resources: [
      "fishing_bait",
      ...FISHING_SPOTS.map((spot) => spot.fishId),
    ],
  },
  {
    title: "Cooked Meals",
    resources: COOKING_RECIPES.map((recipe) => recipe.cookedId),
  },
  {
    title: "Supplies & Curios",
    resources: ["camp_spice", "leather_wrap", "anglers_cache"],
  },
  {
    title: "Hunting Spoils",
    resources: [
      "feather",
      "bones",
      "raw_chicken",
      "raw_beef",
      "raw_game",
      "beast_hide",
      "mystic_shard",
      "rare_token",
    ],
  },
  {
    title: "Equipment",
    resources: [
      "worn_pickaxe_item",
      "worn_hatchet_item",
      "worn_rod_item",
      "training_blade_item",
      "training_tunic_item",
      ...FISHING_RODS.filter((rod) => rod.cost && Object.keys(rod.cost).length)
        .map((rod) => `${rod.id}_item`),
      ...WEAPONS.filter((weapon) => weapon.cost && Object.keys(weapon.cost).length)
        .map((weapon) => `${weapon.id}_item`),
      ...ARMORS.filter((armor) => armor.cost && Object.keys(armor.cost).length)
        .map((armor) => `${armor.id}_item`),
    ],
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

function getResourceIcon(resourceId) {
  return ICON_REGISTRY[resourceId] || "📦";
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
  {
    id: "fishing",
    name: "Fishing",
    description: "Cast lines for fresh catches and rare crates.",
  },
  {
    id: "cooking",
    name: "Cooking",
    description: "Prepare meals that keep the camp thriving.",
  },
  {
    id: "attack",
    name: "Attack",
    description: "Sharpen weapon technique for consistent strikes.",
  },
  {
    id: "strength",
    name: "Strength",
    description: "Build the power behind every blow.",
  },
  {
    id: "defense",
    name: "Defense",
    description: "Bolster resilience against enemy attacks.",
  },
  {
    id: "accuracy",
    name: "Accuracy",
    description: "Steady your aim to land precise hits.",
  },
  {
    id: "hitpoints",
    name: "Hitpoints",
    description: "Expand your vitality to endure longer battles.",
  },
];

const SKILL_LOADOUT_CONFIG = [
  {
    skillId: "mining",
    skillName: "Mining",
    items: [{ label: "Pickaxe", getter: () => getEquippedPickaxe() }],
  },
  {
    skillId: "woodcutting",
    skillName: "Woodcutting",
    items: [{ label: "Axe", getter: () => getEquippedAxe() }],
  },
  {
    skillId: "fishing",
    skillName: "Fishing",
    items: [{ label: "Rod", getter: () => getEquippedRod() }],
  },
  {
    skillId: "smithing",
    skillName: "Smithing",
    items: [
      {
        label: "Smelting Focus",
        getter: () =>
          SMELTING_RECIPES.find((recipe) => recipe.id === state.smelting.currentRecipeId) ||
          SMELTING_RECIPES[0],
      },
    ],
  },
  {
    skillId: "cooking",
    skillName: "Cooking",
    items: [{ label: "Active Recipe", getter: () => getCurrentRecipe() }],
  },
  {
    skillId: "combat",
    skillName: "Combat",
    items: [
      { label: "Weapon", getter: () => getEquippedWeapon() },
      { label: "Armor", getter: () => getEquippedArmor() },
    ],
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
    rodId: FISHING_RODS[0].id,
    weaponId: WEAPONS[0].id,
    armorId: ARMORS[0].id,
  },
  ownedPickaxes: new Set([PICKAXES[0].id]),
  ownedAxes: new Set([AXES[0].id]),
  ownedRods: new Set([FISHING_RODS[0].id]),
  ownedWeapons: new Set([WEAPONS[0].id]),
  ownedArmors: new Set([ARMORS[0].id]),
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
  fishing: {
    active: false,
    startTime: 0,
    timerId: null,
    currentDurationMs: 0,
    currentSpotId: null,
  },
  cooking: {
    active: false,
    startTime: 0,
    timerId: null,
    currentDurationMs: 0,
    currentRecipeId: null,
  },
  smelting: {
    active: false,
    startTime: 0,
    timerId: null,
    currentDurationMs: 0,
    currentRecipeId: null,
  },
  combat: {
    active: false,
    timerId: null,
    areaId: COMBAT_AREAS[0].id,
    monsterId: null,
    playerHp: 0,
    playerMaxHp: 0,
    monsterHp: 0,
    monsterMaxHp: 0,
    playerAttackInterval: 0,
    monsterAttackInterval: 0,
    playerNextAttack: 0,
    monsterNextAttack: 0,
  },
  inventory: createInitialInventory(),
  coins: 0,
  autoContinue: {
    mining: true,
    woodcutting: true,
    fishing: true,
    cooking: true,
    smithing: true,
    combat: true,
  },
  log: [],
  logLimit: 12,
  currentStoneId: STONES[0].id,
  currentTreeId: TREES[0].id,
  currentSpotId: FISHING_SPOTS[0].id,
  currentRecipeId: COOKING_RECIPES[0].id,
  skills: {
    mining: createSkillState(),
    smithing: createSkillState(),
    woodcutting: createSkillState(),
    fishing: createSkillState(),
    cooking: createSkillState(),
    attack: createSkillState(),
    strength: createSkillState(),
    defense: createSkillState(),
    accuracy: createSkillState(),
    hitpoints: createSkillState(),
  },
  activeTraining: null,
  trainingLabel: "",
};

state.miningSkill = state.skills.mining;
state.smithingSkill = state.skills.smithing;
state.woodcuttingSkill = state.skills.woodcutting;
state.fishingSkill = state.skills.fishing;
state.cookingSkill = state.skills.cooking;
state.attackSkill = state.skills.attack;
state.strengthSkill = state.skills.strength;
state.defenseSkill = state.skills.defense;
state.accuracySkill = state.skills.accuracy;
state.hitpointsSkill = state.skills.hitpoints;

state.inventory.worn_pickaxe_item = 1;
state.inventory.worn_hatchet_item = 1;
state.inventory.worn_rod_item = 1;
state.inventory.training_blade_item = 1;
state.inventory.training_tunic_item = 1;
state.inventory.fishing_bait = 10;
state.inventory.camp_spice = state.inventory.camp_spice || 0;
state.inventory.leather_wrap = state.inventory.leather_wrap || 0;
state.inventory.anglers_cache = state.inventory.anglers_cache || 0;
state.inventory.feather = state.inventory.feather || 0;
state.inventory.bones = state.inventory.bones || 0;
state.inventory.raw_chicken = state.inventory.raw_chicken || 0;
state.inventory.raw_beef = state.inventory.raw_beef || 0;
state.inventory.raw_game = state.inventory.raw_game || 0;
state.inventory.beast_hide = state.inventory.beast_hide || 0;
state.inventory.mystic_shard = state.inventory.mystic_shard || 0;
state.inventory.rare_token = state.inventory.rare_token || 0;
state.coins = 45;

state.fishing.currentSpotId = state.currentSpotId;
state.cooking.currentRecipeId = state.currentRecipeId;
state.combat.playerHp = 0;

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

function getEquippedRod() {
  return FISHING_RODS.find((rod) => rod.id === state.equipment.rodId) || FISHING_RODS[0];
}

function getEquippedWeapon() {
  return WEAPONS.find((weapon) => weapon.id === state.equipment.weaponId) || WEAPONS[0];
}

function getEquippedArmor() {
  return ARMORS.find((armor) => armor.id === state.equipment.armorId) || ARMORS[0];
}

let saveSlots = Array(SAVE_SLOT_COUNT).fill(null);

const elements = {};

function nodeListForEach(collection, callback) {
  if (!collection || typeof callback !== "function") {
    return;
  }
  for (let index = 0; index < collection.length; index += 1) {
    callback(collection[index], index, collection);
  }
}

function getClosestElement(element, selector) {
  if (!element || !selector) {
    return null;
  }
  if (typeof element.closest === "function") {
    return element.closest(selector);
  }
  let current = element;
  while (current && current.nodeType === 1) {
    const matches =
      current.matches ||
      current.webkitMatchesSelector ||
      current.msMatchesSelector ||
      current.mozMatchesSelector;
    if (matches && matches.call(current, selector)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}

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

  elements.rodName = document.getElementById("rod-name");
  elements.fishingLevel = document.getElementById("fishing-level");
  elements.fishingXp = document.getElementById("fishing-xp");
  elements.fishingXpToNext = document.getElementById("fishing-xp-to-next");
  elements.currentSpotName = document.getElementById("current-spot-name");
  elements.currentSpotYield = document.getElementById("current-spot-yield");
  elements.castDuration = document.getElementById("cast-duration");
  elements.spotSelect = document.getElementById("spot-select");
  elements.spotRequirement = document.getElementById("spot-requirement");
  elements.spotDescription = document.getElementById("spot-description");
  elements.fishButton = document.getElementById("fish-button");
  elements.fishProgressBar = document.getElementById("fishing-progress-bar");
  elements.fishProgressLabel = document.getElementById("fishing-progress-label");
  elements.autoContinueFishing = document.getElementById("fish-auto-continue");

  elements.cookingLevel = document.getElementById("cooking-level");
  elements.cookingXp = document.getElementById("cooking-xp");
  elements.cookingXpToNext = document.getElementById("cooking-xp-to-next");
  elements.currentRecipeName = document.getElementById("current-recipe-name");
  elements.cookDuration = document.getElementById("cook-duration");
  elements.recipeSelect = document.getElementById("recipe-select");
  elements.recipeRequirement = document.getElementById("recipe-requirement");
  elements.recipeDescription = document.getElementById("recipe-description");
  elements.cookButton = document.getElementById("cook-button");
  elements.cookingProgressBar = document.getElementById("cooking-progress-bar");
  elements.cookingProgressLabel = document.getElementById("cooking-progress-label");
  elements.autoContinueCooking = document.getElementById("cook-auto-continue");

  elements.weaponName = document.getElementById("weapon-name");
  elements.armorName = document.getElementById("armor-name");
  elements.attackLevel = document.getElementById("attack-level");
  elements.attackXp = document.getElementById("attack-xp");
  elements.strengthLevel = document.getElementById("strength-level");
  elements.strengthXp = document.getElementById("strength-xp");
  elements.defenseLevel = document.getElementById("defense-level");
  elements.defenseXp = document.getElementById("defense-xp");
  elements.accuracyLevel = document.getElementById("accuracy-level");
  elements.accuracyXp = document.getElementById("accuracy-xp");
  elements.hitpointsLevel = document.getElementById("hitpoints-level");
  elements.hitpointsXp = document.getElementById("hitpoints-xp");
  elements.playerHealthValue = document.getElementById("player-health-value");
  elements.playerHealthBar = document.getElementById("player-health-bar");
  elements.monsterName = document.getElementById("monster-name");
  elements.monsterHealthValue = document.getElementById("monster-health-value");
  elements.monsterHealthBar = document.getElementById("monster-health-bar");
  elements.monsterDetails = document.getElementById("monster-details");
  elements.combatAreaSelect = document.getElementById("combat-area-select");
  elements.combatAreaDescription = document.getElementById("combat-area-description");
  elements.combatMonsterList = document.getElementById("combat-monster-list");
  elements.combatStatus = document.getElementById("combat-status");
  elements.combatStopButton = document.getElementById("combat-stop-button");
  elements.combatFoodSelect = document.getElementById("combat-food-select");
  elements.combatEatButton = document.getElementById("combat-eat-button");

  elements.smithingProgressBar = document.getElementById("smithing-progress-bar");
  elements.smithingProgressLabel = document.getElementById("smithing-progress-label");
  elements.smithingStopButton = document.getElementById("smithing-stop-button");

  elements.topResourceName = document.getElementById("top-resource-name");
  elements.topResourceCount = document.getElementById("top-resource-count");
  elements.topMiningLevel = document.getElementById("top-mining-level");
  elements.topMiningXp = document.getElementById("top-mining-xp");
  elements.topSmithingLevel = document.getElementById("top-smithing-level");
  elements.topSmithingXp = document.getElementById("top-smithing-xp");
  elements.topWoodcuttingLevel = document.getElementById("top-woodcutting-level");
  elements.topWoodcuttingXp = document.getElementById("top-woodcutting-xp");
  elements.topCoins = document.getElementById("top-coins");
  elements.topFishingLevel = document.getElementById("top-fishing-level");
  elements.topFishingXp = document.getElementById("top-fishing-xp");
  elements.topCookingLevel = document.getElementById("top-cooking-level");
  elements.topCookingXp = document.getElementById("top-cooking-xp");

  elements.skillOverviewButton = document.getElementById("skill-overview-button");
  elements.skillModal = document.getElementById("skill-overview");
  elements.skillLoadout = document.getElementById("skill-loadout");
  elements.skillModalClosers = document.querySelectorAll("[data-skill-modal-close]");

  elements.activeTraining = document.getElementById("active-training");
  elements.activeTrainingSkill = document.getElementById("active-training-skill");
  elements.activeTrainingBar = document.getElementById("active-training-bar");
  elements.activeTrainingStatus = document.getElementById("active-training-status");

  elements.inventoryList = document.getElementById("inventory-list");
  elements.skillList = document.getElementById("skill-list");
  elements.logEntries = document.getElementById("log-entries");
  elements.saveSlotList = document.getElementById("save-slot-list");

  elements.smeltingList = document.getElementById("smelting-list");
  elements.pickaxeForgeList = document.getElementById("pickaxe-forge-list");
  elements.axeForgeList = document.getElementById("axe-forge-list");
  elements.rodForgeList = document.getElementById("rod-forge-list");
  elements.weaponForgeList = document.getElementById("weapon-forge-list");
  elements.armorForgeList = document.getElementById("armor-forge-list");
  elements.smithyCategory = document.getElementById("smithy-category");

  elements.marketSellList = document.getElementById("market-sell-list");
  elements.marketBuyList = document.getElementById("market-buy-list");

  elements.notifications = document.getElementById("notifications");

  elements.tabButtons = document.querySelectorAll("[data-tab-target]");
  elements.tabPanels = document.querySelectorAll("[data-tab-panel]");
  elements.dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
  const dropdownLabels = document.querySelectorAll("[data-dropdown-label]");
  nodeListForEach(dropdownLabels, (label) => {
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

  if (elements.autoContinueFishing) {
    elements.autoContinueFishing.checked = state.autoContinue.fishing;
    elements.autoContinueFishing.addEventListener("change", (event) => {
      state.autoContinue.fishing = event.target.checked;
    });
  }

  if (elements.autoContinueCooking) {
    elements.autoContinueCooking.checked = state.autoContinue.cooking;
    elements.autoContinueCooking.addEventListener("change", (event) => {
      state.autoContinue.cooking = event.target.checked;
    });
  }

  if (elements.mineButton) {
    elements.mineButton.addEventListener("click", toggleMining);
  }
  if (elements.chopButton) {
    elements.chopButton.addEventListener("click", toggleWoodcutting);
  }
  if (elements.fishButton) {
    elements.fishButton.addEventListener("click", toggleFishing);
  }
  if (elements.cookButton) {
    elements.cookButton.addEventListener("click", toggleCooking);
  }

  nodeListForEach(elements.tabButtons, (button) => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.tabTarget);
      const dropdown = getClosestElement(button, "[data-dropdown]");
      if (dropdown) {
        closeDropdown(dropdown);
      }
    });
  });

  nodeListForEach(elements.dropdownToggles, (toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const dropdown = getClosestElement(toggle, "[data-dropdown]");
      if (!dropdown) return;
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      closeAllDropdowns();
      if (!expanded) {
        openDropdown(dropdown, toggle);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!getClosestElement(event.target, "[data-dropdown]")) {
      closeAllDropdowns();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
      closeSkillModal();
    }
  });

  if (elements.skillOverviewButton) {
    elements.skillOverviewButton.setAttribute("aria-expanded", "false");
    elements.skillOverviewButton.addEventListener("click", () => {
      openSkillModal();
    });
  }

  nodeListForEach(elements.skillModalClosers, (closer) => {
    closer.addEventListener("click", () => {
      closeSkillModal({ focusTrigger: true });
    });
  });

  if (elements.stoneSelect) {
    elements.stoneSelect.addEventListener("change", (event) => {
      state.currentStoneId = event.target.value;
      renderStoneOptions();
      updateResourceDetails();
    });
  }

  if (elements.treeSelect) {
    elements.treeSelect.addEventListener("change", (event) => {
      state.currentTreeId = event.target.value;
      renderTreeOptions();
      updateTreeDetails();
    });
  }

  if (elements.spotSelect) {
    elements.spotSelect.addEventListener("change", (event) => {
      state.currentSpotId = event.target.value;
      state.fishing.currentSpotId = event.target.value;
      renderSpotOptions();
      updateSpotDetails();
    });
  }

  if (elements.recipeSelect) {
    elements.recipeSelect.addEventListener("change", (event) => {
      state.currentRecipeId = event.target.value;
      state.cooking.currentRecipeId = event.target.value;
      renderRecipeOptions();
      updateRecipeDetails();
    });
  }

  if (elements.inventoryList) {
    elements.inventoryList.addEventListener("click", handleInventoryAction);
  }

  if (elements.saveSlotList) {
    elements.saveSlotList.addEventListener("click", handleSaveSlotAction);
  }

  if (elements.smeltingList) {
    elements.smeltingList.addEventListener("click", handleSmithingAction);
  }
  if (elements.pickaxeForgeList) {
    elements.pickaxeForgeList.addEventListener("click", handleSmithingAction);
  }
  if (elements.axeForgeList) {
    elements.axeForgeList.addEventListener("click", handleSmithingAction);
  }
  if (elements.rodForgeList) {
    elements.rodForgeList.addEventListener("click", handleSmithingAction);
  }
  if (elements.weaponForgeList) {
    elements.weaponForgeList.addEventListener("click", handleSmithingAction);
  }
  if (elements.armorForgeList) {
    elements.armorForgeList.addEventListener("click", handleSmithingAction);
  }

  if (elements.marketSellList) {
    elements.marketSellList.addEventListener("click", handleMarketAction);
  }
  if (elements.marketBuyList) {
    elements.marketBuyList.addEventListener("click", handleMarketAction);
  }

  if (elements.smithyCategory) {
    elements.smithyCategory.addEventListener("change", () => {
      switchSmithyCategory(elements.smithyCategory.value);
    });
  }

  if (elements.smithingStopButton) {
    elements.smithingStopButton.addEventListener("click", () => {
      cancelSmeltingCycle("You let the crucible rest.");
    });
  }

  if (elements.combatStopButton) {
    elements.combatStopButton.addEventListener("click", () => {
      stopCombat("You lower your guard.");
    });
  }

  if (elements.combatAreaSelect) {
    elements.combatAreaSelect.addEventListener("change", (event) => {
      state.combat.areaId = event.target.value;
      renderCombatMonsters();
      updateCombatAreaDescription();
    });
  }

  if (elements.combatMonsterList) {
    elements.combatMonsterList.addEventListener("click", handleCombatAction);
  }

  if (elements.combatEatButton) {
    elements.combatEatButton.addEventListener("click", () => {
      const foodSelect = elements.combatFoodSelect;
      consumeCombatFood(foodSelect ? foodSelect.value : undefined);
    });
  }

    loadSaveSlots();
    renderStoneOptions();
    renderTreeOptions();
    renderSpotOptions();
    renderRecipeOptions();
    renderCombatAreaOptions();
    updateResourceDetails();
    updateTreeDetails();
    updateSpotDetails();
    updateRecipeDetails();
    updateCombatAreaDescription();
    renderInventory();
    renderLog();
    updateMiningStats();
    updateWoodcuttingStats();
    updateFishingStats();
    updateCookingStats();
    updateSkillDisplays();
    renderSmithingOptions();
    renderCombatMonsters();
    renderCombatFoodOptions();
    renderMarket();
    updateTopReadouts();
    renderSaveSlots();

    refreshEquipmentLabels();
    renderSkillLoadout();

  const activeTabButton = document.querySelector(".tab-button.active");
  const initialTab =
    (activeTabButton && activeTabButton.dataset && activeTabButton.dataset.tabTarget) ||
    "quarry";
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

    ensureExclusiveTraining("mining");
    beginTraining("mining");
    state.mining.active = true;
    state.mining.startTime = Date.now();
    state.mining.currentDurationMs = getEffectiveSwingDuration(stone);
    elements.mineButton.textContent = "Stop Mining";
    elements.mineButton.disabled = false;
    updateProgressLabel("Working");
    setTrainingStatus("mining", "Working");
    tickMining();
  }

  function cancelMiningCycle(message) {
    state.mining.active = false;
  state.mining.currentDurationMs = 0;
  if (state.mining.timerId) {
    clearTimeout(state.mining.timerId);
    state.mining.timerId = null;
  }

    elements.progressBar.style.width = "0%";
    elements.mineButton.textContent = "Start Mining";
    elements.mineButton.disabled = false;
    updateProgressLabel("Idle");
    clearTrainingIndicator("mining");
    if (message) {
      pushLog(message);
    }
  }

function tickMining() {
  if (!state.mining.active) return;

  state.mining.timerId = setTimeout(() => {
    const now = Date.now();
    const elapsed = now - state.mining.startTime;
    const duration = state.mining.currentDurationMs;
    const progress = Math.min(1, duration ? elapsed / duration : 0);

    elements.progressBar.style.width = `${progress * 100}%`;
    const label = `${Math.round(progress * 100)}%`;
    updateProgressLabel(label);
    setTrainingProgress("mining", progress, label);

    if (progress >= 1) {
      completeMiningCycle();
      return;
    }

    tickMining();
  }, 120);
}

  function completeMiningCycle() {
    state.mining.active = false;
    const stone = getCurrentStone();

    elements.mineButton.textContent = state.autoContinue.mining
      ? "Preparing next swing"
      : "Start Mining";
    elements.mineButton.disabled = state.autoContinue.mining;
    updateProgressLabel("Hauling");
    setTrainingStatus("mining", "Hauling");

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
        clearTrainingIndicator("mining");
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
  const multiplier =
    pickaxe && pickaxe.yieldMultiplier != null ? pickaxe.yieldMultiplier : 1;
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

    ensureExclusiveTraining("woodcutting");
    beginTraining("woodcutting");
    state.woodcutting.active = true;
    state.woodcutting.startTime = Date.now();
    state.woodcutting.currentDurationMs = getEffectiveChopDuration(tree);
    if (elements.chopButton) {
      elements.chopButton.textContent = "Stop Chopping";
      elements.chopButton.disabled = false;
    }
    updateWoodProgressLabel("Working");
    setTrainingStatus("woodcutting", "Working");
    tickWoodcutting();
  }

  function cancelWoodcuttingCycle(message) {
    state.woodcutting.active = false;
  state.woodcutting.currentDurationMs = 0;
  if (state.woodcutting.timerId) {
    clearTimeout(state.woodcutting.timerId);
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
    clearTrainingIndicator("woodcutting");
    if (message) {
      pushLog(message);
    }
  }

function tickWoodcutting() {
  if (!state.woodcutting.active) return;

  state.woodcutting.timerId = setTimeout(() => {
    const now = Date.now();
    const elapsed = now - state.woodcutting.startTime;
    const duration = state.woodcutting.currentDurationMs;
    const progress = Math.min(1, duration ? elapsed / duration : 0);

    if (elements.woodProgressBar) {
      elements.woodProgressBar.style.width = `${progress * 100}%`;
    }
    const label = `${Math.round(progress * 100)}%`;
    updateWoodProgressLabel(label);
    setTrainingProgress("woodcutting", progress, label);

    if (progress >= 1) {
      completeWoodcuttingCycle();
      return;
    }

    tickWoodcutting();
  }, 120);
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
    setTrainingStatus("woodcutting", "Hauling");

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
        clearTrainingIndicator("woodcutting");
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
    const multiplier =
      axe && axe.yieldMultiplier != null ? axe.yieldMultiplier : 1;
    return Math.max(1, Math.floor(base * multiplier));
  }

  function toggleFishing() {
    if (state.fishing.active) {
      cancelFishingCycle("You reel in and take a moment.");
      return;
    }

    startFishingCycle();
  }

  function startFishingCycle() {
    if (state.fishing.active) return;

    const spot = getCurrentSpot();
    if (!spot) return;

    const fishingSkill = getSkill("fishing");
    if (fishingSkill.level < spot.levelRequirement) {
      pushLog(
        `That water is unforgiving. Fishing ${spot.name} requires level ${spot.levelRequirement}.`
      );
      return;
    }

    const rod = getEquippedRod();
    if (fishingSkill.level < rod.fishingLevelRequirement) {
      pushLog(
        `${rod.name} feels clumsy. You need fishing level ${rod.fishingLevelRequirement} to cast it well.`
      );
      return;
    }

    if ((state.inventory.fishing_bait || 0) < spot.baitCost) {
      pushLog("You are out of bait. Visit the market to restock before casting again.");
      updateFishProgressLabel("No bait");
      clearTrainingIndicator("fishing");
      return;
    }

    ensureExclusiveTraining("fishing");
    beginTraining("fishing");
    state.inventory.fishing_bait -= spot.baitCost;
    renderInventory();
    state.fishing.active = true;
    state.fishing.currentSpotId = spot.id;
    state.fishing.startTime = Date.now();
    state.fishing.currentDurationMs = getEffectiveCastDuration(spot);
    if (elements.fishButton) {
      elements.fishButton.textContent = "Stop Fishing";
      elements.fishButton.disabled = false;
    }
    updateFishProgressLabel("Working");
    setTrainingStatus("fishing", "Working");
    tickFishing();
  }

  function cancelFishingCycle(message) {
    state.fishing.active = false;
    state.fishing.currentDurationMs = 0;
    if (state.fishing.timerId) {
      clearTimeout(state.fishing.timerId);
      state.fishing.timerId = null;
    }

    if (elements.fishProgressBar) {
      elements.fishProgressBar.style.width = "0%";
    }
    if (elements.fishButton) {
      elements.fishButton.textContent = "Start Fishing";
      elements.fishButton.disabled = false;
    }
    updateFishProgressLabel("Idle");
    clearTrainingIndicator("fishing");
    if (message) {
      pushLog(message);
    }
  }

  function tickFishing() {
    if (!state.fishing.active) return;

  state.fishing.timerId = setTimeout(() => {
    const now = Date.now();
    const elapsed = now - state.fishing.startTime;
    const duration = state.fishing.currentDurationMs;
    const progress = Math.min(1, duration ? elapsed / duration : 0);

    if (elements.fishProgressBar) {
      elements.fishProgressBar.style.width = `${progress * 100}%`;
      }
      const label = `${Math.round(progress * 100)}%`;
      updateFishProgressLabel(label);
      setTrainingProgress("fishing", progress, label);

      if (progress >= 1) {
        completeFishingCycle();
        return;
      }

    tickFishing();
  }, 120);
}

  function completeFishingCycle() {
    state.fishing.active = false;
    const activeSpot =
      FISHING_SPOTS.find((entry) => entry.id === state.fishing.currentSpotId) ||
      getCurrentSpot();

    if (elements.fishButton) {
      elements.fishButton.textContent = state.autoContinue.fishing
        ? "Setting next cast"
        : "Start Fishing";
      elements.fishButton.disabled = state.autoContinue.fishing;
    }
    updateFishProgressLabel("Landing catch");
    setTrainingStatus("fishing", "Landing catch");

    const haul = calculateFishingYield(activeSpot);
    state.inventory[activeSpot.fishId] = (state.inventory[activeSpot.fishId] || 0) + haul;
    renderInventory();

    const fishName = haul === 1 ? activeSpot.fishName : `${activeSpot.fishName}s`;
    pushLog(`You net ${formatNumber(haul)} ${fishName}.`);

    if (Math.random() < (activeSpot.rareChance || 0)) {
      state.inventory.anglers_cache = (state.inventory.anglers_cache || 0) + 1;
      pushLog("A sealed angler's cache washes ashore!");
    }

    const xpGained = haul * activeSpot.xp;
    gainSkillXp("fishing", xpGained);

    setTimeout(() => {
      if (elements.fishProgressBar) {
        elements.fishProgressBar.style.width = "0%";
      }
      if (!state.autoContinue.fishing) {
        if (elements.fishButton) {
          elements.fishButton.disabled = false;
        }
        updateFishProgressLabel("Idle");
        clearTrainingIndicator("fishing");
        return;
      }

      const nextSpot = getCurrentSpot();
      if ((state.inventory.fishing_bait || 0) < nextSpot.baitCost) {
        pushLog("You are out of bait and pause your fishing.");
        if (elements.fishButton) {
          elements.fishButton.disabled = false;
        }
        updateFishProgressLabel("No bait");
        clearTrainingIndicator("fishing");
        return;
      }

      startFishingCycle();
    }, 600);
  }

  function calculateFishingYield(spot) {
    if (!spot) return 0;
    const [min, max] = spot.yield;
    const base =
      min === max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
    const rod = getEquippedRod();
    const multiplier =
      rod && rod.yieldMultiplier != null ? rod.yieldMultiplier : 1;
    return Math.max(1, Math.floor(base * multiplier));
  }

  function toggleCooking() {
    if (state.cooking.active) {
      cancelCookingCycle("You let the fire rest for a bit.");
      return;
    }

    startCookingCycle();
  }

  function startCookingCycle() {
    if (state.cooking.active) return;

    const recipe = getCurrentRecipe();
    if (!recipe) return;

    const cookingSkill = getSkill("cooking");
    if (cookingSkill.level < recipe.levelRequirement) {
      pushLog(
        `That recipe is tricky. Cooking ${recipe.name} requires level ${recipe.levelRequirement}.`
      );
      return;
    }

    if ((state.inventory[recipe.rawId] || 0) < 1) {
      pushLog(`You need ${getResourceName(recipe.rawId)} before you can cook ${recipe.name}.`);
      updateCookingProgressLabel("No ingredients");
      clearTrainingIndicator("cooking");
      return;
    }

    ensureExclusiveTraining("cooking");
    beginTraining("cooking");
    state.cooking.active = true;
    state.cooking.currentRecipeId = recipe.id;
    state.cooking.startTime = Date.now();
    state.cooking.currentDurationMs = getEffectiveCookDuration(recipe);
    if (elements.cookButton) {
      elements.cookButton.textContent = "Stop Cooking";
      elements.cookButton.disabled = false;
    }
    updateCookingProgressLabel("Working");
    setTrainingStatus("cooking", "Working");
    tickCooking();
  }

  function cancelCookingCycle(message) {
    state.cooking.active = false;
    state.cooking.currentDurationMs = 0;
    if (state.cooking.timerId) {
      clearTimeout(state.cooking.timerId);
      state.cooking.timerId = null;
    }

    if (elements.cookingProgressBar) {
      elements.cookingProgressBar.style.width = "0%";
    }
    if (elements.cookButton) {
      elements.cookButton.textContent = "Start Cooking";
      elements.cookButton.disabled = false;
    }
    updateCookingProgressLabel("Idle");
    clearTrainingIndicator("cooking");
    if (message) {
      pushLog(message);
    }
  }

  function tickCooking() {
    if (!state.cooking.active) return;

  state.cooking.timerId = setTimeout(() => {
    const now = Date.now();
    const elapsed = now - state.cooking.startTime;
    const duration = state.cooking.currentDurationMs;
    const progress = Math.min(1, duration ? elapsed / duration : 0);

    if (elements.cookingProgressBar) {
      elements.cookingProgressBar.style.width = `${progress * 100}%`;
      }
      const label = `${Math.round(progress * 100)}%`;
      updateCookingProgressLabel(label);
      setTrainingProgress("cooking", progress, label);

      if (progress >= 1) {
        completeCookingCycle();
        return;
      }

    tickCooking();
  }, 120);
}

  function completeCookingCycle() {
    state.cooking.active = false;
    const activeRecipe =
      COOKING_RECIPES.find((entry) => entry.id === state.cooking.currentRecipeId) ||
      getCurrentRecipe();

    if (elements.cookButton) {
      elements.cookButton.textContent = state.autoContinue.cooking
        ? "Prepping next dish"
        : "Start Cooking";
      elements.cookButton.disabled = state.autoContinue.cooking;
    }
    updateCookingProgressLabel("Plating");
    setTrainingStatus("cooking", "Plating");

    state.inventory[activeRecipe.rawId] -= 1;
    state.inventory[activeRecipe.cookedId] =
      (state.inventory[activeRecipe.cookedId] || 0) + 1;
    renderInventory();

    pushLog(
      `You cook ${activeRecipe.name} and earn ${formatNumber(activeRecipe.xp)} cooking xp.`
    );
    gainSkillXp("cooking", activeRecipe.xp);

    setTimeout(() => {
      if (elements.cookingProgressBar) {
        elements.cookingProgressBar.style.width = "0%";
      }
      if (!state.autoContinue.cooking) {
        if (elements.cookButton) {
          elements.cookButton.disabled = false;
        }
        updateCookingProgressLabel("Idle");
        clearTrainingIndicator("cooking");
        return;
      }

      const nextRecipe = getCurrentRecipe();
      if ((state.inventory[nextRecipe.rawId] || 0) <= 0) {
        pushLog(`You are out of ${getResourceName(nextRecipe.rawId)} to keep cooking.`);
        if (elements.cookButton) {
          elements.cookButton.disabled = false;
        }
        updateCookingProgressLabel("No ingredients");
        clearTrainingIndicator("cooking");
        return;
      }

      startCookingCycle();
    }, 600);
  }
  function refreshEquipmentLabels() {
    const pickaxe = getEquippedPickaxe();
    if (elements.pickaxeName && pickaxe) {
      elements.pickaxeName.textContent = pickaxe.name;
    }

    const axe = getEquippedAxe();
    if (elements.axeName && axe) {
      elements.axeName.textContent = axe.name;
    }

    const rod = getEquippedRod();
    if (elements.rodName && rod) {
      elements.rodName.textContent = rod.name;
    }

    const weapon = getEquippedWeapon();
    if (elements.weaponName && weapon) {
      elements.weaponName.textContent = weapon.name;
    }

    const armor = getEquippedArmor();
    if (elements.armorName && armor) {
      elements.armorName.textContent = armor.name;
    }

    updateTopReadouts();
    updateCombatStats();
    renderSkillLoadout();
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
        const amount = state.inventory[resourceId] || 0;
        const li = document.createElement("li");
        li.className = "inventory-entry";
        const icon = document.createElement("span");
        icon.className = "item-icon";
        icon.textContent = getResourceIcon(resourceId);
        const name = document.createElement("span");
        name.className = "item-name";
        name.textContent = getResourceName(resourceId);
        const qty = document.createElement("span");
        qty.className = "item-qty";
        qty.textContent = formatNumber(amount);
        li.appendChild(icon);
        li.appendChild(name);
        li.appendChild(qty);

        if (resourceId === "anglers_cache" && amount > 0) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "inventory-action";
          button.dataset.inventoryAction = "open-cache";
          button.dataset.id = resourceId;
          button.textContent = "Open";
          li.appendChild(button);
        }

        fragment.appendChild(li);
      });
    });

    elements.inventoryList.appendChild(fragment);
    renderCombatFoodOptions();
    renderMarket();
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

function showNotification(title, body, variant = "default") {
  if (!elements.notifications) return;
  const notice = document.createElement("div");
  notice.className = "notification";
  if (variant && variant !== "default") {
    notice.dataset.variant = variant;
  }

  const heading = document.createElement("span");
  heading.className = "notification__title";
  heading.textContent = title;

  const message = document.createElement("span");
  message.className = "notification__body";
  message.textContent = body;

  notice.appendChild(heading);
  notice.appendChild(message);

  elements.notifications.appendChild(notice);

  setTimeout(() => {
    notice.remove();
  }, 5000);
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

  function updateFishProgressLabel(text) {
    if (elements.fishProgressLabel) {
      elements.fishProgressLabel.textContent = text;
    }
  }

  function updateCookingProgressLabel(text) {
    if (elements.cookingProgressLabel) {
      elements.cookingProgressLabel.textContent = text;
    }
  }

  function updateSmithingProgressLabel(text) {
    if (elements.smithingProgressLabel) {
      elements.smithingProgressLabel.textContent = text;
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

  if (elements.topCoins) {
    elements.topCoins.textContent = formatNumber(state.coins || 0);
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

  const fishing = getSkill("fishing");
  if (elements.topFishingLevel) {
    elements.topFishingLevel.textContent = fishing.level;
  }
  if (elements.topFishingXp) {
    elements.topFishingXp.textContent = fishing.level >= MAX_LEVEL
      ? "--"
      : formatNumber(Math.max(0, fishing.xpToNext - fishing.xp));
  }

  const cooking = getSkill("cooking");
  if (elements.topCookingLevel) {
    elements.topCookingLevel.textContent = cooking.level;
  }
  if (elements.topCookingXp) {
    elements.topCookingXp.textContent = cooking.level >= MAX_LEVEL
      ? "--"
      : formatNumber(Math.max(0, cooking.xpToNext - cooking.xp));
  }
}

function formatSkillLabel(skillId) {
  return skillId
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function beginTraining(skillId) {
  const definition = getSkillDefinition(skillId);
  const definitionName = definition && definition.name ? definition.name : "";
  state.activeTraining = skillId;
  state.trainingLabel = definitionName || formatSkillLabel(skillId);
  if (elements.activeTrainingSkill) {
    elements.activeTrainingSkill.textContent = state.trainingLabel;
  }
  if (elements.activeTrainingStatus) {
    elements.activeTrainingStatus.textContent = "Preparing...";
  }
  if (elements.activeTrainingBar) {
    elements.activeTrainingBar.style.width = "0%";
  }
  if (elements.activeTraining) {
    elements.activeTraining.setAttribute("data-active", "true");
  }
}

function setTrainingProgress(skillId, progress, statusText) {
  if (state.activeTraining !== skillId) return;
  const numericProgress = typeof progress === "number" ? progress : 0;
  const safeProgress = Math.max(0, Math.min(1, numericProgress));
  if (elements.activeTrainingBar) {
    elements.activeTrainingBar.style.width = `${safeProgress * 100}%`;
  }
  if (statusText && elements.activeTrainingStatus) {
    elements.activeTrainingStatus.textContent = statusText;
  }
}

function setTrainingStatus(skillId, statusText) {
  if (state.activeTraining !== skillId) return;
  if (elements.activeTrainingStatus) {
    elements.activeTrainingStatus.textContent = statusText;
  }
}

function clearTrainingIndicator(skillId, message) {
  if (state.activeTraining && skillId && state.activeTraining !== skillId) {
    return;
  }
  state.activeTraining = null;
  state.trainingLabel = "";
  if (elements.activeTrainingSkill) {
    elements.activeTrainingSkill.textContent = "Idle";
  }
  if (elements.activeTrainingStatus) {
    elements.activeTrainingStatus.textContent = message || "No skill in progress";
  }
  if (elements.activeTrainingBar) {
    elements.activeTrainingBar.style.width = "0%";
  }
  if (elements.activeTraining) {
    elements.activeTraining.removeAttribute("data-active");
  }
}

function ensureExclusiveTraining(skillId) {
  const active = state.activeTraining;
  if (!active || active === skillId) return;
  const interruptionDefinition = getSkillDefinition(skillId);
  const interruptionName =
    interruptionDefinition && interruptionDefinition.name
      ? interruptionDefinition.name.toLowerCase()
      : "";
  const focusName = interruptionName || skillId;
  const interruptionMessage = `You redirect your focus to ${focusName}.`;
  if (active === "mining") {
    cancelMiningCycle(interruptionMessage);
  } else if (active === "woodcutting") {
    cancelWoodcuttingCycle(interruptionMessage);
  } else if (active === "fishing") {
    cancelFishingCycle(interruptionMessage);
  } else if (active === "cooking") {
    cancelCookingCycle(interruptionMessage);
  } else if (active === "smithing") {
    cancelSmeltingCycle(interruptionMessage);
  } else if (active === "combat") {
    stopCombat(interruptionMessage);
  }
}

function switchTab(target) {
  if (!target) return;

  nodeListForEach(elements.tabButtons, (button) => {
    const isActive = button.dataset.tabTarget === target;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  nodeListForEach(elements.tabPanels, (panel) => {
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
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  nodeListForEach(dropdowns, (dropdown) => {
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
  const menus = document.querySelectorAll("[data-dropdown-menu]");
  nodeListForEach(menus, (menu) => {
    const dropdownId = menu.dataset.dropdownMenu;
    const label = dropdownId
      ? document.querySelector(`[data-dropdown-label="${dropdownId}"]`)
      : null;
    const buttons = menu.querySelectorAll("[data-tab-target]");
    let matched = false;

    nodeListForEach(buttons, (button) => {
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
  const toolBonus =
    pickaxe && pickaxe.speedMultiplier != null ? pickaxe.speedMultiplier : 1;
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
  const toolBonus =
    axe && axe.speedMultiplier != null ? axe.speedMultiplier : 1;
  const effective = Math.round(tree.baseSwingDurationMs / (skillBonus * toolBonus));
  return Math.max(900, effective);
}

function formatLogYield(tree) {
  const [min, max] = tree.yield;
  return min === max ? `${min}` : `${min}-${max}`;
}

function getCurrentSpot() {
  return (
    FISHING_SPOTS.find((spot) => spot.id === state.currentSpotId) || FISHING_SPOTS[0]
  );
}

function getEffectiveCastDuration(spot) {
  if (!spot) return 0;
  const fishingSkill = getSkill("fishing");
  const rod = getEquippedRod();
  const skillBonus = 1 + (fishingSkill.level - 1) * 0.015;
  const toolBonus =
    rod && rod.speedMultiplier != null ? rod.speedMultiplier : 1;
  const effective = Math.round(spot.baseCastDurationMs / (skillBonus * toolBonus));
  return Math.max(900, effective);
}

function formatCatchYield(spot) {
  const [min, max] = spot.yield;
  return min === max ? `${min}` : `${min}-${max}`;
}

function rollRange(min, max) {
  if (min === max) return min;
  const low = Number(min) || 0;
  const high = Number(max) || low;
  if (high <= low) return low;
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function getCurrentRecipe() {
  return (
    COOKING_RECIPES.find((recipe) => recipe.id === state.currentRecipeId) ||
    COOKING_RECIPES[0]
  );
}

function getEffectiveCookDuration(recipe) {
  if (!recipe) return 0;
  const cookingSkill = getSkill("cooking");
  const spiceBonus = state.inventory.camp_spice > 0 ? 1.05 : 1;
  const skillBonus = 1 + (cookingSkill.level - 1) * 0.018;
  const effective = Math.round(recipe.baseDurationMs / (skillBonus * spiceBonus));
  return Math.max(800, effective);
}

function getSmeltingDuration(recipe) {
  if (!recipe) return 0;
  const smithingSkill = getSkill("smithing");
  const skillBonus = 1 + (smithingSkill.level - 1) * 0.015;
  return Math.max(1000, Math.round((recipe.baseDurationMs || 5000) / skillBonus));
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

function renderSpotOptions() {
  if (!elements.spotSelect) return;
  elements.spotSelect.innerHTML = "";

  const fishingSkill = getSkill("fishing");

  FISHING_SPOTS.forEach((spot) => {
    const option = document.createElement("option");
    const locked = fishingSkill.level < spot.levelRequirement;
    option.value = spot.id;
    option.textContent = `${spot.name} (Lv ${spot.levelRequirement}${
      locked ? " – locked" : ""
    })`;
    option.disabled = locked;
    if (state.currentSpotId === spot.id) {
      option.selected = true;
    }
    elements.spotSelect.appendChild(option);
  });

  const currentSpot = FISHING_SPOTS.find(
    (spot) => spot.id === state.currentSpotId && fishingSkill.level >= spot.levelRequirement
  );

  if (currentSpot) {
    elements.spotSelect.value = state.currentSpotId;
    return;
  }

  const fallback =
    FISHING_SPOTS.find((spot) => fishingSkill.level >= spot.levelRequirement) ||
    FISHING_SPOTS[0];
  state.currentSpotId = fallback.id;
  state.fishing.currentSpotId = fallback.id;
  elements.spotSelect.value = fallback.id;
}

function renderRecipeOptions() {
  if (!elements.recipeSelect) return;
  elements.recipeSelect.innerHTML = "";

  const cookingSkill = getSkill("cooking");

  COOKING_RECIPES.forEach((recipe) => {
    const option = document.createElement("option");
    const locked = cookingSkill.level < recipe.levelRequirement;
    option.value = recipe.id;
    option.textContent = `${recipe.name} (Lv ${recipe.levelRequirement}${
      locked ? " – locked" : ""
    })`;
    option.disabled = locked;
    if (state.currentRecipeId === recipe.id) {
      option.selected = true;
    }
    elements.recipeSelect.appendChild(option);
  });

  const currentRecipe = COOKING_RECIPES.find(
    (recipe) =>
      recipe.id === state.currentRecipeId && cookingSkill.level >= recipe.levelRequirement
  );

  if (currentRecipe) {
    elements.recipeSelect.value = state.currentRecipeId;
    return;
  }

  const fallback =
    COOKING_RECIPES.find((recipe) => cookingSkill.level >= recipe.levelRequirement) ||
    COOKING_RECIPES[0];
  state.currentRecipeId = fallback.id;
  state.cooking.currentRecipeId = fallback.id;
  elements.recipeSelect.value = fallback.id;
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

function getCombatUnlockLevel() {
  const attack = getSkill("attack").level;
  const strength = getSkill("strength").level;
  const defense = getSkill("defense").level;
  const accuracy = getSkill("accuracy").level;
  const hitpoints = getSkill("hitpoints").level;
  return Math.max(attack, strength, defense, accuracy, hitpoints);
}

function getCombatArea(areaId = state.combat.areaId) {
  return COMBAT_AREAS.find((area) => area.id === areaId) || COMBAT_AREAS[0];
}

function getCombatMonster(monsterId, area = getCombatArea()) {
  if (!area) return null;
  return area.monsters.find((monster) => monster.id === monsterId) || null;
}

function renderCombatAreaOptions() {
  if (!elements.combatAreaSelect) return;
  elements.combatAreaSelect.innerHTML = "";
  const unlockLevel = getCombatUnlockLevel();
  let selectedArea = getCombatArea();
  let fallback = null;

  COMBAT_AREAS.forEach((area) => {
    const locked = unlockLevel < area.levelRequirement;
    if (!locked && !fallback) {
      fallback = area;
    }

    const option = document.createElement("option");
    option.value = area.id;
    option.textContent = `${area.name} (Lv ${area.levelRequirement}${
      locked ? " – locked" : ""
    })`;
    option.disabled = locked;
    if (!locked && area.id === state.combat.areaId) {
      option.selected = true;
    }
    elements.combatAreaSelect.appendChild(option);
  });

  if (!selectedArea || unlockLevel < selectedArea.levelRequirement) {
    const areaFallback = fallback || COMBAT_AREAS[0];
    state.combat.areaId = areaFallback.id;
    elements.combatAreaSelect.value = areaFallback.id;
  }

  updateCombatAreaDescription();
}

function updateCombatAreaDescription() {
  if (!elements.combatAreaDescription) return;
  const area = getCombatArea();
  if (!area) {
    elements.combatAreaDescription.textContent = "No combat areas unlocked yet.";
    return;
  }
  elements.combatAreaDescription.textContent = area.description;
}

function renderCombatMonsters() {
  if (!elements.combatMonsterList) return;
  const area = getCombatArea();
  elements.combatMonsterList.innerHTML = "";
  if (!area) return;

  const unlockLevel = getCombatUnlockLevel();
  const fragment = document.createDocumentFragment();

  area.monsters.forEach((monster) => {
    const li = document.createElement("li");
    li.className = "action-list__item";
    if (state.combat.active && state.combat.monsterId === monster.id) {
      li.classList.add("active");
    }

    const summary = document.createElement("div");
    summary.className = "action-list__summary";

    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = `${monster.icon} ${monster.name}`;
    const detail = document.createElement("p");
    detail.textContent = `Lv ${monster.levelRequirement} • ${monster.maxHp} hp • +${formatNumber(
      monster.xp
    )} xp • ${monster.coins[0]}-${monster.coins[1]} coins`;
    info.appendChild(title);
    info.appendChild(detail);

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.monsterId = monster.id;
    const locked = unlockLevel < monster.levelRequirement;
    const isActive = state.combat.active && state.combat.monsterId === monster.id;

    button.dataset.combatAction = isActive ? "stop" : "fight";
    button.textContent = isActive ? "Stop" : "Fight";
    button.disabled = locked || (state.combat.active && !isActive);

    summary.appendChild(info);
    summary.appendChild(button);
    li.appendChild(summary);

    const note = document.createElement("p");
    note.className = "action-list__note";
    if (locked) {
      note.classList.add("action-list__note--warn");
      note.textContent = `Requires combat level ${monster.levelRequirement}.`;
    } else if (monster.drops && monster.drops.length) {
      const drops = monster.drops
        .map((drop) => {
          const range = drop.min === drop.max ? drop.min : `${drop.min}-${drop.max}`;
          return `${range} ${getResourceName(drop.itemId)}`;
        })
        .join(", ");
      note.textContent = `Drops: ${drops}`;
    } else {
      note.textContent = "Reliable training foe.";
    }
    li.appendChild(note);

    fragment.appendChild(li);
  });

  elements.combatMonsterList.appendChild(fragment);
}

function renderCombatFoodOptions() {
  if (!elements.combatFoodSelect) return;
  const options = Object.entries(COMBAT_FOOD_HEALING)
    .map(([foodId, heal]) => ({
      id: foodId,
      heal,
      amount: state.inventory[foodId] || 0,
    }))
    .filter((entry) => entry.amount > 0)
    .sort((a, b) => getResourceName(a.id).localeCompare(getResourceName(b.id)));

  elements.combatFoodSelect.innerHTML = "";

  if (!options.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No cooked food available";
    option.disabled = true;
    elements.combatFoodSelect.appendChild(option);
    if (elements.combatEatButton) {
      elements.combatEatButton.disabled = true;
    }
    return;
  }

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose food";
  elements.combatFoodSelect.appendChild(placeholder);

  options.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = `${getResourceName(entry.id)} (${entry.amount} • +${entry.heal} hp)`;
    elements.combatFoodSelect.appendChild(option);
  });

  if (elements.combatEatButton) {
    elements.combatEatButton.disabled = false;
  }
}

function consumeCombatFood(foodId) {
  if (!foodId) {
    if (elements.combatStatus) {
      elements.combatStatus.textContent = "Select food to eat.";
    }
    return;
  }
  const heal = COMBAT_FOOD_HEALING[foodId];
  if (!heal) {
    if (elements.combatStatus) {
      elements.combatStatus.textContent = "That item cannot be eaten.";
    }
    return;
  }
  const owned = state.inventory[foodId] || 0;
  if (owned <= 0) {
    if (elements.combatStatus) {
      elements.combatStatus.textContent = "You have none left.";
    }
    renderCombatFoodOptions();
    return;
  }

  state.inventory[foodId] = owned - 1;
  const stats = getPlayerCombatStats();
  state.combat.playerMaxHp = stats.maxHp;
  const currentHp = Math.max(0, state.combat.playerHp || stats.maxHp);
  state.combat.playerHp = Math.min(stats.maxHp, currentHp + heal);
  if (elements.combatStatus) {
    elements.combatStatus.textContent = `You recover ${heal} health.`;
  }
  pushLog(`You eat ${getResourceName(foodId)} and recover ${heal} health.`);
  renderInventory();
  renderCombatFoodOptions();
  updateCombatStats();
}

function getPlayerCombatStats() {
  const attackSkill = getSkill("attack");
  const strengthSkill = getSkill("strength");
  const defenseSkill = getSkill("defense");
  const accuracySkill = getSkill("accuracy");
  const hitpointsSkill = getSkill("hitpoints");
  const weapon = getEquippedWeapon();
  const armor = getEquippedArmor();

  const weaponAccuracyBonus =
    weapon && typeof weapon.accuracyBonus === "number" ? weapon.accuracyBonus : 0;
  const weaponStrengthBonus =
    weapon && typeof weapon.strengthBonus === "number" ? weapon.strengthBonus : 0;
  const armorDefenseBonus =
    armor && typeof armor.defenseBonus === "number" ? armor.defenseBonus : 0;
  const armorHitpointsBonus =
    armor && typeof armor.hitpointsBonus === "number" ? armor.hitpointsBonus : 0;
  const weaponSpeedMultiplier =
    weapon && weapon.speedMultiplier != null ? weapon.speedMultiplier : 1;

  const attackRating =
    attackSkill.level + weaponAccuracyBonus + Math.floor(accuracySkill.level * 0.5);
  const strengthRating = strengthSkill.level + weaponStrengthBonus;
  const defenseRating = defenseSkill.level + armorDefenseBonus;
  const maxHp = Math.max(
    30,
    40 + hitpointsSkill.level * 6 + armorHitpointsBonus * 2
  );
  const attackInterval = Math.max(1200, Math.round(2600 / weaponSpeedMultiplier));

  return {
    attackRating,
    strengthRating,
    defenseRating,
    accuracyRating: accuracySkill.level,
    maxHp,
    attackInterval,
  };
}

function updateCombatStats() {
  const stats = getPlayerCombatStats();
  state.combat.playerMaxHp = stats.maxHp;
  if (state.combat.playerHp <= 0) {
    state.combat.playerHp = stats.maxHp;
  }

  if (elements.playerHealthValue) {
    const playerHp = Math.max(0, Math.floor(state.combat.playerHp));
    elements.playerHealthValue.textContent = `${playerHp}/${stats.maxHp}`;
  }
  if (elements.playerHealthBar) {
    const ratio = Math.max(0, Math.min(1, (state.combat.playerHp || stats.maxHp) / stats.maxHp));
    elements.playerHealthBar.style.width = `${ratio * 100}%`;
  }

  const monster = state.combat.active ? getCombatMonster(state.combat.monsterId) : null;
  if (monster && !state.combat.monsterMaxHp) {
    state.combat.monsterMaxHp = monster.maxHp;
  }

  if (elements.monsterName) {
    elements.monsterName.textContent = monster ? monster.name : "None selected";
  }
  if (elements.monsterHealthValue) {
    if (monster && state.combat.active) {
      const hpValue = Math.max(0, Math.floor(state.combat.monsterHp));
      elements.monsterHealthValue.textContent = `${hpValue}/${monster.maxHp}`;
    } else {
      elements.monsterHealthValue.textContent = "--";
    }
  }
  if (elements.monsterHealthBar) {
    if (monster && state.combat.active) {
      const ratio = Math.max(0, Math.min(1, state.combat.monsterHp / monster.maxHp));
      elements.monsterHealthBar.style.width = `${ratio * 100}%`;
    } else {
      elements.monsterHealthBar.style.width = "0%";
    }
  }
}

function handleCombatAction(event) {
  const button = getClosestElement(event.target, "button[data-combat-action]");
  if (!button) return;
  const action = button.dataset.combatAction;
  const monsterId = button.dataset.monsterId;
  if (action === "fight") {
    startCombat(monsterId);
  } else if (action === "stop") {
    stopCombat("You withdraw from combat.");
  }
}

function startCombat(monsterId) {
  const area = getCombatArea();
  const monster = getCombatMonster(monsterId, area);
  if (!monster) {
    if (elements.combatStatus) {
      elements.combatStatus.textContent = "That foe is not available.";
    }
    return;
  }
  const unlockLevel = getCombatUnlockLevel();
  if (unlockLevel < monster.levelRequirement) {
    const message = `You need combat level ${monster.levelRequirement} to challenge the ${monster.name}.`;
    if (elements.combatStatus) {
      elements.combatStatus.textContent = message;
    }
    pushLog(message);
    return;
  }

  ensureExclusiveTraining("combat");
  beginTraining("combat");
  setTrainingStatus("combat", `Fighting ${monster.name}`);

  state.combat.active = true;
  state.combat.monsterId = monster.id;
  state.combat.monsterHp = monster.maxHp;
  state.combat.monsterMaxHp = monster.maxHp;

  const stats = getPlayerCombatStats();
  state.combat.playerMaxHp = stats.maxHp;
  if (!state.combat.playerHp || state.combat.playerHp > stats.maxHp) {
    state.combat.playerHp = stats.maxHp;
  }
  state.combat.playerAttackInterval = stats.attackInterval;
  state.combat.monsterAttackInterval = monster.attackSpeedMs;
  const now = Date.now();
  state.combat.playerNextAttack = now + state.combat.playerAttackInterval;
  state.combat.monsterNextAttack = now + state.combat.monsterAttackInterval;

  if (state.combat.timerId) {
    clearInterval(state.combat.timerId);
  }
  state.combat.timerId = window.setInterval(processCombatTick, 120);
  if (elements.combatStatus) {
    elements.combatStatus.textContent = `You engage the ${monster.name}.`;
  }
  renderCombatMonsters();
  updateCombatStats();
}

function stopCombat(message = "You stand down.") {
  if (state.combat.timerId) {
    clearInterval(state.combat.timerId);
    state.combat.timerId = null;
  }

  const wasActive = state.combat.active;
  state.combat.active = false;
  state.combat.monsterId = null;
  state.combat.monsterHp = 0;
  state.combat.monsterMaxHp = 0;
  state.combat.playerAttackInterval = 0;
  state.combat.monsterAttackInterval = 0;
  state.combat.playerNextAttack = 0;
  state.combat.monsterNextAttack = 0;

  if (wasActive) {
    clearTrainingIndicator("combat", message);
  } else {
    if (elements.combatStatus) {
      elements.combatStatus.textContent = message;
    }
  }

  renderCombatMonsters();
  updateCombatStats();
}

function processCombatTick() {
  if (!state.combat.active) return;
  const monster = getCombatMonster(state.combat.monsterId);
  if (!monster) {
    stopCombat("Your opponent slips away.");
    return;
  }

  const stats = getPlayerCombatStats();
  const now = Date.now();

  if (now >= state.combat.playerNextAttack) {
    const hitChance = (stats.attackRating + stats.accuracyRating) /
      (stats.attackRating + stats.accuracyRating + monster.defense + 40);
    const didHit = Math.random() < Math.max(0.15, Math.min(0.95, hitChance));
    if (didHit) {
      const maxHit = Math.max(1, Math.floor(stats.strengthRating / 3) + 3);
      const damage = Math.max(1, rollRange(Math.max(1, Math.floor(stats.strengthRating / 5)), maxHit));
      state.combat.monsterHp = Math.max(0, state.combat.monsterHp - damage);
      if (elements.combatStatus) {
        elements.combatStatus.textContent = `You hit the ${monster.name} for ${damage}.`;
      }
    } else if (elements.combatStatus) {
      elements.combatStatus.textContent = `You miss the ${monster.name}.`;
    }
    state.combat.playerNextAttack = now + state.combat.playerAttackInterval;
  }

  if (state.combat.monsterHp <= 0) {
    finishCombatVictory(monster);
    return;
  }

  if (now >= state.combat.monsterNextAttack) {
    const monsterHitChance = monster.accuracy /
      (monster.accuracy + stats.defenseRating + 35);
    const didHit = Math.random() < Math.max(0.2, Math.min(0.95, monsterHitChance));
    if (didHit) {
      const maxMonster = Math.max(1, Math.floor(monster.attack / 2) + 4);
      const monsterDamage = Math.max(1, rollRange(Math.max(1, Math.floor(monster.attack / 4)), maxMonster));
      state.combat.playerHp = Math.max(0, state.combat.playerHp - monsterDamage);
      if (elements.combatStatus) {
        elements.combatStatus.textContent = `${monster.name} hits you for ${monsterDamage}.`;
      }
    } else if (state.combat.active && elements.combatStatus) {
      elements.combatStatus.textContent = `${monster.name} misses.`;
    }
    state.combat.monsterNextAttack = now + state.combat.monsterAttackInterval;
  }

  if (state.combat.playerHp <= 0) {
    handleCombatDefeat(monster);
    return;
  }

  setTrainingProgress("combat", 1 - state.combat.monsterHp / monster.maxHp);
  updateCombatStats();
}

function finishCombatVictory(monster) {
  if (state.combat.timerId) {
    clearInterval(state.combat.timerId);
    state.combat.timerId = null;
  }

  const stats = getPlayerCombatStats();
  state.combat.active = false;
  state.combat.monsterId = null;
  state.combat.monsterHp = 0;
  state.combat.monsterMaxHp = 0;

  const coinsEarned = rollRange(monster.coins[0], monster.coins[1]);
  state.coins += coinsEarned;

  const lootMessages = [];
  (monster.drops || []).forEach((drop) => {
    if (Math.random() < drop.chance) {
      const amount = rollRange(drop.min, drop.max);
      if (amount > 0) {
        state.inventory[drop.itemId] = (state.inventory[drop.itemId] || 0) + amount;
        lootMessages.push(`${amount} ${getResourceName(drop.itemId)}`);
      }
    }
  });

  const xp = monster.xp;
  gainSkillXp("attack", Math.round(xp * 0.35));
  gainSkillXp("strength", Math.round(xp * 0.35));
  gainSkillXp("defense", Math.round(xp * 0.2));
  gainSkillXp("accuracy", Math.round(xp * 0.2));
  gainSkillXp("hitpoints", Math.round(xp * 0.25));

  let logMessage = `You defeat the ${monster.name} and earn ${formatNumber(coinsEarned)} coins.`;
  if (lootMessages.length) {
    logMessage += ` Loot: ${lootMessages.join(", ")}.`;
  }
  pushLog(logMessage);

  state.combat.playerHp = Math.min(stats.maxHp, (state.combat.playerHp || stats.maxHp) + Math.ceil(stats.maxHp * 0.2));
  if (elements.combatStatus) {
    elements.combatStatus.textContent = `You defeat the ${monster.name}.`;
  }

  renderInventory();
  renderCombatFoodOptions();
  renderCombatMonsters();
  renderMarket();
  updateTopReadouts();
  updateCombatStats();

  if (state.autoContinue.combat) {
    setTrainingStatus("combat", `Preparing for another ${monster.name}...`);
    window.setTimeout(() => {
      startCombat(monster.id);
    }, 900);
  } else {
    clearTrainingIndicator("combat", `You defeat the ${monster.name}.`);
  }
}

function handleCombatDefeat(monster) {
  if (state.combat.timerId) {
    clearInterval(state.combat.timerId);
    state.combat.timerId = null;
  }
  const stats = getPlayerCombatStats();
  state.combat.active = false;
  state.combat.monsterId = null;
  state.combat.monsterHp = 0;
  state.combat.monsterMaxHp = 0;
  const recovery = Math.max(10, Math.floor(stats.maxHp * 0.4));
  state.combat.playerHp = recovery;
  if (elements.combatStatus) {
    elements.combatStatus.textContent = `${monster.name} overwhelms you. You retreat to recover.`;
  }
  pushLog(`The ${monster.name} overpowers you. You regroup with ${recovery} health.`);
  clearTrainingIndicator("combat", `You retreat from the ${monster.name}.`);
  renderCombatMonsters();
  updateCombatStats();
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

function updateSpotDetails() {
  const spot = getCurrentSpot();
  if (!spot) return;
  const fishingSkill = getSkill("fishing");
  if (elements.spotRequirement) {
    const locked = fishingSkill.level < spot.levelRequirement;
    elements.spotRequirement.textContent = locked
      ? `Requires fishing level ${spot.levelRequirement}.`
      : `Unlocked at level ${spot.levelRequirement}.`;
    elements.spotRequirement.classList.toggle("locked", locked);
  }
  if (elements.spotDescription) {
    const baseSeconds = (spot.baseCastDurationMs / 1000).toFixed(1);
    const baitText = spot.baitCost === 1 ? "bait" : "bait pieces";
    elements.spotDescription.textContent = `${spot.description} Base cast ${baseSeconds}s, costs ${spot.baitCost} ${baitText} and yields ${formatCatchYield(
      spot
    )} fish.`;
  }
  updateFishingStats();
}

function updateRecipeDetails() {
  const recipe = getCurrentRecipe();
  if (!recipe) return;
  const cookingSkill = getSkill("cooking");
  if (elements.recipeRequirement) {
    const locked = cookingSkill.level < recipe.levelRequirement;
    elements.recipeRequirement.textContent = locked
      ? `Requires cooking level ${recipe.levelRequirement}.`
      : `Unlocked at level ${recipe.levelRequirement}.`;
    elements.recipeRequirement.classList.toggle("locked", locked);
  }
  if (elements.recipeDescription) {
    elements.recipeDescription.textContent = recipe.description;
  }
  updateCookingStats();
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

function updateFishingStats() {
  const spot = getCurrentSpot();
  if (elements.castDuration && spot) {
    elements.castDuration.textContent = (getEffectiveCastDuration(spot) / 1000)
      .toFixed(2)
      .replace(/\.00$/, "");
  }
  if (elements.currentSpotName && spot) {
    elements.currentSpotName.textContent = spot.name;
  }
  if (elements.currentSpotYield && spot) {
    elements.currentSpotYield.textContent = formatCatchYield(spot);
  }
  updateTopReadouts();
}

function updateCookingStats() {
  const recipe = getCurrentRecipe();
  if (elements.cookDuration && recipe) {
    elements.cookDuration.textContent = (getEffectiveCookDuration(recipe) / 1000)
      .toFixed(2)
      .replace(/\.00$/, "");
  }
  if (elements.currentRecipeName && recipe) {
    elements.currentRecipeName.textContent = recipe.name;
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

  const fishing = getSkill("fishing");
  if (elements.fishingLevel) {
    elements.fishingLevel.textContent = fishing.level;
  }
  if (elements.fishingXp) {
    elements.fishingXp.textContent = formatNumber(fishing.xp);
  }
  if (elements.fishingXpToNext) {
    elements.fishingXpToNext.textContent =
      fishing.level >= MAX_LEVEL
        ? "Max"
        : formatNumber(Math.max(0, fishing.xpToNext - fishing.xp));
  }

  const cooking = getSkill("cooking");
  if (elements.cookingLevel) {
    elements.cookingLevel.textContent = cooking.level;
  }
  if (elements.cookingXp) {
    elements.cookingXp.textContent = formatNumber(cooking.xp);
  }
  if (elements.cookingXpToNext) {
    elements.cookingXpToNext.textContent =
      cooking.level >= MAX_LEVEL
        ? "Max"
        : formatNumber(Math.max(0, cooking.xpToNext - cooking.xp));
  }

  const attack = getSkill("attack");
  if (elements.attackLevel) {
    elements.attackLevel.textContent = attack.level;
  }
  if (elements.attackXp) {
    elements.attackXp.textContent = formatNumber(attack.xp);
  }

  const strength = getSkill("strength");
  if (elements.strengthLevel) {
    elements.strengthLevel.textContent = strength.level;
  }
  if (elements.strengthXp) {
    elements.strengthXp.textContent = formatNumber(strength.xp);
  }

  const defense = getSkill("defense");
  if (elements.defenseLevel) {
    elements.defenseLevel.textContent = defense.level;
  }
  if (elements.defenseXp) {
    elements.defenseXp.textContent = formatNumber(defense.xp);
  }

  const accuracy = getSkill("accuracy");
  if (elements.accuracyLevel) {
    elements.accuracyLevel.textContent = accuracy.level;
  }
  if (elements.accuracyXp) {
    elements.accuracyXp.textContent = formatNumber(accuracy.xp);
  }

  const hitpoints = getSkill("hitpoints");
  if (elements.hitpointsLevel) {
    elements.hitpointsLevel.textContent = hitpoints.level;
  }
  if (elements.hitpointsXp) {
    elements.hitpointsXp.textContent = formatNumber(hitpoints.xp);
  }

  renderSkillList();
  updateTopReadouts();
  renderCombatAreaOptions();
  renderCombatMonsters();
  updateCombatStats();
  renderSkillLoadout();
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
    const skillName = (skillDef && skillDef.name) || skillId;
    pushLog(`Your ${skillName.toLowerCase()} skill rises to level ${skill.level}!`);
    showNotification(
      `${skillName} Level Up`,
      `You reached level ${skill.level} in ${skillName.toLowerCase()}.`,
      "level"
    );
    if (skillId === "mining") {
      renderStoneOptions();
      updateResourceDetails();
    } else if (skillId === "woodcutting") {
      renderTreeOptions();
      updateTreeDetails();
    } else if (skillId === "smithing") {
      renderSmithingOptions();
    } else if (skillId === "fishing") {
      renderSpotOptions();
      updateSpotDetails();
    } else if (skillId === "cooking") {
      renderRecipeOptions();
      updateRecipeDetails();
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

function renderSkillLoadout() {
  if (!elements.skillLoadout) return;
  elements.skillLoadout.innerHTML = "";
  const fragment = document.createDocumentFragment();

  SKILL_LOADOUT_CONFIG.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "skill-loadout__item";

    const label = document.createElement("span");
    label.className = "skill-loadout__label";
    label.textContent = entry.skillName;

    const value = document.createElement("span");
    value.className = "skill-loadout__value";
    const detailText = entry.items
      .map((item) => {
        try {
          const getter = item.getter;
          const data = typeof getter === "function" ? getter() : undefined;
          if (!data) {
            return `${item.label}: --`;
          }
          const name = data.name || getResourceName(data.id) || data.id || "--";
          return `${item.label}: ${name}`;
        } catch (error) {
          console.warn("Unable to resolve loadout item", error);
          return `${item.label}: --`;
        }
      })
      .join(" • ");
    value.textContent = detailText;

    li.appendChild(label);
    li.appendChild(value);
    fragment.appendChild(li);
  });

  elements.skillLoadout.appendChild(fragment);
}

function openSkillModal() {
  if (!elements.skillModal) return;
  if (elements.skillModal.hidden) {
    elements.skillModal.hidden = false;
  }
  elements.skillModal.setAttribute("data-open", "true");
  if (elements.skillOverviewButton) {
    elements.skillOverviewButton.setAttribute("aria-expanded", "true");
  }
  renderSkillList();
  renderSkillLoadout();
}

function closeSkillModal({ focusTrigger = false } = {}) {
  if (!elements.skillModal || elements.skillModal.hidden) return;
  elements.skillModal.removeAttribute("data-open");
  elements.skillModal.hidden = true;
  if (elements.skillOverviewButton) {
    elements.skillOverviewButton.setAttribute("aria-expanded", "false");
  }
  if (focusTrigger && elements.skillOverviewButton) {
    try {
      elements.skillOverviewButton.focus({ preventScroll: true });
    } catch (error) {
      elements.skillOverviewButton.focus();
    }
  }
}

  function renderSmithingOptions() {
    renderSmeltingList();
    renderForgeList(PICKAXES, elements.pickaxeForgeList, "pickaxe");
    renderForgeList(AXES, elements.axeForgeList, "axe");
    renderForgeList(FISHING_RODS, elements.rodForgeList, "rod");
    renderForgeList(WEAPONS, elements.weaponForgeList, "weapon");
    renderForgeList(ARMORS, elements.armorForgeList, "armor");
    const smithyValue = elements.smithyCategory ? elements.smithyCategory.value : "";
    switchSmithyCategory(smithyValue || "smelt");
  }

  function switchSmithyCategory(category) {
    const smithyViews = document.querySelectorAll(".smithy-view");
    nodeListForEach(smithyViews, (section) => {
      const isActive = section.dataset.smithyView === category;
      section.hidden = !isActive;
      section.classList.toggle("active", isActive);
    });
    if (elements.smithyCategory && elements.smithyCategory.value !== category) {
      elements.smithyCategory.value = category;
    }
  }

function renderSmeltingList() {
  if (!elements.smeltingList) return;
  elements.smeltingList.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const smithing = getSkill("smithing");
  const smeltingActive = state.smelting.active;
  const activeRecipeId = state.smelting.currentRecipeId;

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
    button.textContent = activeRecipeId === recipe.id && smeltingActive ? "Smelting" : "Smelt";

    const ownedOre = state.inventory[recipe.oreId] || 0;
    const meetsLevel = smithing.level >= recipe.levelRequirement;
    const hasOre = ownedOre >= recipe.oreAmount;
    button.disabled = smeltingActive || !(meetsLevel && hasOre);

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
    if (smeltingActive && activeRecipeId !== recipe.id) {
      messages.push("Currently smelting another bar.");
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
    } else if (type === "axe") {
      usageLine.textContent = `Use: Woodcutting level ${tool.woodcuttingLevelRequirement}`;
    } else if (type === "rod") {
      usageLine.textContent = `Use: Fishing level ${tool.fishingLevelRequirement}`;
    } else if (type === "weapon") {
      usageLine.textContent = `Use: Attack ${tool.attackLevelRequirement} • Strength ${tool.strengthLevelRequirement}`;
    } else {
      usageLine.textContent = `Use: Defense ${tool.defenseLevelRequirement} • Hitpoints ${tool.hitpointsLevelRequirement}`;
    }
    info.appendChild(usageLine);

    const button = document.createElement("button");
    button.type = "button";
    const actionMap = {
      pickaxe: "forge-pickaxe",
      axe: "forge-axe",
      rod: "forge-rod",
      weapon: "forge-weapon",
      armor: "forge-armor",
    };
    button.dataset.action = actionMap[type] || "forge";
    button.dataset.id = tool.id;
    const alreadyOwned =
      type === "pickaxe"
        ? state.ownedPickaxes.has(tool.id)
        : type === "axe"
        ? state.ownedAxes.has(tool.id)
        : type === "rod"
        ? state.ownedRods.has(tool.id)
        : type === "weapon"
        ? state.ownedWeapons.has(tool.id)
        : state.ownedArmors.has(tool.id);
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
    if (type === "pickaxe" || type === "axe" || type === "rod") {
      const usageRequirement =
        type === "pickaxe"
          ? tool.miningLevelRequirement
          : type === "axe"
          ? tool.woodcuttingLevelRequirement
          : tool.fishingLevelRequirement;
      const usageSkillId =
        type === "pickaxe" ? "mining" : type === "axe" ? "woodcutting" : "fishing";
      const usageSkill = getSkill(usageSkillId);
      const usageSkillDefinition = getSkillDefinition(usageSkillId);
      if (usageSkill && usageSkillDefinition && usageSkill.level < usageRequirement) {
        messages.push(
          `Using well requires ${usageSkillDefinition.name} level ${usageRequirement}.`
        );
      }
    } else if (type === "weapon") {
      const attackSkill = getSkill("attack");
      const strengthSkill = getSkill("strength");
      if (attackSkill.level < tool.attackLevelRequirement) {
        messages.push(`Requires attack level ${tool.attackLevelRequirement} to wield.`);
      }
      if (strengthSkill.level < tool.strengthLevelRequirement) {
        messages.push(`Requires strength level ${tool.strengthLevelRequirement} to wield.`);
      }
    } else if (type === "armor") {
      const defenseSkill = getSkill("defense");
      const hitpointsSkill = getSkill("hitpoints");
      if (defenseSkill.level < tool.defenseLevelRequirement) {
        messages.push(`Requires defense level ${tool.defenseLevelRequirement} to wear.`);
      }
      if (hitpointsSkill.level < tool.hitpointsLevelRequirement) {
        messages.push(`Requires hitpoints level ${tool.hitpointsLevelRequirement} to wear.`);
      }
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
  const button = getClosestElement(event.target, "button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "smelt") {
    attemptSmelt(id);
  } else if (action === "forge-pickaxe") {
    attemptForge("pickaxe", id);
  } else if (action === "forge-axe") {
    attemptForge("axe", id);
  } else if (action === "forge-rod") {
    attemptForge("rod", id);
  } else if (action === "forge-weapon") {
    attemptForge("weapon", id);
  } else if (action === "forge-armor") {
    attemptForge("armor", id);
  }
}

function handleInventoryAction(event) {
  const button = getClosestElement(event.target, "button[data-inventory-action]");
  if (!button) return;
  const action = button.dataset.inventoryAction;
  if (action === "open-cache") {
    openAnglersCache();
  }
}

function openAnglersCache() {
  if ((state.inventory.anglers_cache || 0) <= 0) {
    pushLog("You reach for a cache, but none remain.");
    return;
  }
  state.inventory.anglers_cache -= 1;
  const reward = RARE_BOX_REWARDS[Math.floor(Math.random() * RARE_BOX_REWARDS.length)];
  const amount =
    reward.min === reward.max
      ? reward.min
      : Math.floor(Math.random() * (reward.max - reward.min + 1)) + reward.min;
  state.inventory[reward.id] = (state.inventory[reward.id] || 0) + amount;
  renderInventory();
  renderSmithingOptions();
  updateTopReadouts();
  pushLog(
    `You open an angler's cache and recover ${formatNumber(amount)} ${getResourceName(
      reward.id
    )}!`
  );
}

function renderMarket() {
  renderMarketSellList();
  renderMarketBuyList();
}

function renderMarketSellList() {
  if (!elements.marketSellList) return;
  elements.marketSellList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  Object.entries(MARKET_SELL_VALUES)
    .sort(([a], [b]) => getResourceName(a).localeCompare(getResourceName(b)))
    .forEach(([resourceId, baseValue]) => {
      const amount = state.inventory[resourceId] || 0;
      if (amount <= 0 || baseValue <= 0) return;

      const li = document.createElement("li");
      li.className = "action-list__item";

      const summary = document.createElement("div");
      summary.className = "action-list__summary";

      const info = document.createElement("div");
      const title = document.createElement("h4");
      title.textContent = `${getResourceName(resourceId)} (${formatNumber(amount)})`;
      const valueLine = document.createElement("p");
      const singleValue = getSaleValue(resourceId, 1);
      valueLine.textContent = `${singleValue} coins each`;
      info.appendChild(title);
      info.appendChild(valueLine);

      const controls = document.createElement("div");
      controls.className = "action-buttons";

      const sellOne = document.createElement("button");
      sellOne.type = "button";
      sellOne.dataset.marketAction = "sell-one";
      sellOne.dataset.id = resourceId;
      sellOne.textContent = "Sell 1";
      controls.appendChild(sellOne);

      if (amount > 1) {
        const sellAll = document.createElement("button");
        sellAll.type = "button";
        sellAll.dataset.marketAction = "sell-all";
        sellAll.dataset.id = resourceId;
        sellAll.textContent = "Sell All";
        controls.appendChild(sellAll);
      }

      summary.appendChild(info);
      summary.appendChild(controls);
      li.appendChild(summary);

      fragment.appendChild(li);
    });

  if (!fragment.childNodes.length) {
    const li = document.createElement("li");
    li.className = "action-list__empty";
    li.textContent = "Nothing ready to sell just yet.";
    fragment.appendChild(li);
  }

  elements.marketSellList.appendChild(fragment);
}

function renderMarketBuyList() {
  if (!elements.marketBuyList) return;
  elements.marketBuyList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  MARKET_BUY_ITEMS.forEach((item) => {
    const li = document.createElement("li");
    li.className = "action-list__item";

    const summary = document.createElement("div");
    summary.className = "action-list__summary";

    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = item.name;
    const detail = document.createElement("p");
    detail.textContent = item.description;
    info.appendChild(title);
    info.appendChild(detail);

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.marketAction = "buy";
    button.dataset.id = item.id;
    button.textContent = `Buy (${item.cost} coins)`;
    const affordable = (state.coins || 0) >= item.cost;
    button.disabled = !affordable;

    summary.appendChild(info);
    summary.appendChild(button);
    li.appendChild(summary);

    fragment.appendChild(li);
  });

  elements.marketBuyList.appendChild(fragment);
}

function handleMarketAction(event) {
  const button = getClosestElement(event.target, "button[data-market-action]");
  if (!button) return;
  const action = button.dataset.marketAction;
  const resourceId = button.dataset.id;

  if (action === "sell-one") {
    sellResource(resourceId, 1);
  } else if (action === "sell-all") {
    sellResource(resourceId, state.inventory[resourceId] || 0);
  } else if (action === "buy") {
    buyMarketItem(resourceId);
  }
}

function sellResource(resourceId, quantity) {
  const available = state.inventory[resourceId] || 0;
  if (quantity <= 0 || available <= 0) {
    pushLog(`You have no ${getResourceName(resourceId)} to sell.`);
    return;
  }
  const amountToSell = Math.min(quantity, available);
  const coinsEarned = getSaleValue(resourceId, amountToSell);
  state.inventory[resourceId] -= amountToSell;
  state.coins = (state.coins || 0) + coinsEarned;
  renderInventory();
  renderMarket();
  updateTopReadouts();
  pushLog(
    `You sell ${formatNumber(amountToSell)} ${getResourceName(resourceId)} for ${formatNumber(
      coinsEarned
    )} coins.`
  );
}

function buyMarketItem(itemId) {
  const item = MARKET_BUY_ITEMS.find((entry) => entry.id === itemId);
  if (!item) return;
  if ((state.coins || 0) < item.cost) {
    pushLog("You need more coins for that purchase.");
    return;
  }
  state.coins -= item.cost;
  state.inventory[item.id] = (state.inventory[item.id] || 0) + item.quantity;
  renderInventory();
  renderMarket();
  updateTopReadouts();
  pushLog(
    `You buy ${formatNumber(item.quantity)} ${item.name} for ${formatNumber(item.cost)} coins.`
  );
}

function getSaleValue(resourceId, quantity) {
  const baseValue = MARKET_SELL_VALUES[resourceId] || 0;
  let total = baseValue * quantity;
  const cookedIds = COOKING_RECIPES.map((recipe) => recipe.cookedId);
  if (cookedIds.includes(resourceId) && (state.inventory.camp_spice || 0) > 0) {
    total = Math.round(total * 1.15);
  }
  return total;
}

function attemptSmelt(recipeId) {
  const recipe = SMELTING_RECIPES.find((entry) => entry.id === recipeId);
  if (!recipe) return;
  if (state.smelting.active) {
    pushLog("You are already tending a crucible. Let it finish first.");
    return;
  }

  const smithing = getSkill("smithing");
  if (smithing.level < recipe.levelRequirement) {
    pushLog(`You need smithing level ${recipe.levelRequirement} to smelt ${recipe.name}.`);
    return;
  }
  if ((state.inventory[recipe.oreId] || 0) < recipe.oreAmount) {
    pushLog(`You need more ${getResourceName(recipe.oreId)} to smelt ${recipe.name}.`);
    return;
  }

  ensureExclusiveTraining("smithing");
  beginTraining("smithing");

  state.inventory[recipe.oreId] -= recipe.oreAmount;
  state.smelting.active = true;
  state.smelting.currentRecipeId = recipe.id;
  state.smelting.startTime = Date.now();
  state.smelting.currentDurationMs = getSmeltingDuration(recipe);
  updateSmithingProgressLabel("Smelting");
  setTrainingStatus("smithing", "Smelting");

  renderInventory();
  renderSmithingOptions();

  tickSmelting();
}

function tickSmelting() {
  if (!state.smelting.active) return;
  const now = Date.now();
  const elapsed = now - state.smelting.startTime;
  const duration = state.smelting.currentDurationMs;
  const progress = Math.min(1, duration ? elapsed / duration : 0);

  if (elements.smithingProgressBar) {
    elements.smithingProgressBar.style.width = `${progress * 100}%`;
  }
  const label = `${Math.round(progress * 100)}%`;
  updateSmithingProgressLabel(label);
  setTrainingProgress("smithing", progress, label);

  if (progress >= 1) {
    completeSmeltingCycle();
    return;
  }

  state.smelting.timerId = setTimeout(tickSmelting, 120);
}

function completeSmeltingCycle() {
  const recipe = SMELTING_RECIPES.find((entry) => entry.id === state.smelting.currentRecipeId);
  state.smelting.active = false;
  if (state.smelting.timerId) {
    clearTimeout(state.smelting.timerId);
    state.smelting.timerId = null;
  }
  if (recipe) {
    state.inventory[recipe.id] = (state.inventory[recipe.id] || 0) + 1;
    pushLog(`You smelt ${recipe.name} and earn ${formatNumber(recipe.xp)} smithing xp.`);
    gainSkillXp("smithing", recipe.xp);
  }
  updateSmithingProgressLabel("Cooling");
  setTrainingStatus("smithing", "Cooling");
  renderInventory();
  renderSmithingOptions();

  setTimeout(() => {
    if (elements.smithingProgressBar) {
      elements.smithingProgressBar.style.width = "0%";
    }
    updateSmithingProgressLabel("Idle");
    clearTrainingIndicator("smithing");

    if (recipe && state.autoContinue.smithing) {
      if ((state.inventory[recipe.oreId] || 0) >= recipe.oreAmount) {
        attemptSmelt(recipe.id);
      }
    }
  }, 400);
}

function cancelSmeltingCycle(message) {
  if (!state.smelting.active) {
    if (message) {
      updateSmithingProgressLabel("Idle");
      clearTrainingIndicator("smithing", message);
    }
    return;
  }
  state.smelting.active = false;
  if (state.smelting.timerId) {
    clearTimeout(state.smelting.timerId);
    state.smelting.timerId = null;
  }
  if (elements.smithingProgressBar) {
    elements.smithingProgressBar.style.width = "0%";
  }
  updateSmithingProgressLabel("Idle");
  clearTrainingIndicator("smithing", message || "You pause the furnace.");
  renderSmithingOptions();
}

function attemptForge(type, toolId) {
  const smithing = getSkill("smithing");
  let collection;
  let ownedSet;
  let equipKey;
  let usageSkillId;

  if (type === "pickaxe") {
    collection = PICKAXES;
    ownedSet = state.ownedPickaxes;
    equipKey = "pickaxeId";
    usageSkillId = "mining";
  } else if (type === "axe") {
    collection = AXES;
    ownedSet = state.ownedAxes;
    equipKey = "axeId";
    usageSkillId = "woodcutting";
  } else if (type === "rod") {
    collection = FISHING_RODS;
    ownedSet = state.ownedRods;
    equipKey = "rodId";
    usageSkillId = "fishing";
  } else if (type === "weapon") {
    collection = WEAPONS;
    ownedSet = state.ownedWeapons;
    equipKey = "weaponId";
    usageSkillId = "attack";
  } else if (type === "armor") {
    collection = ARMORS;
    ownedSet = state.ownedArmors;
    equipKey = "armorId";
    usageSkillId = "defense";
  } else {
    return;
  }
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

  if (type === "weapon") {
    const attackSkill = getSkill("attack");
    const strengthSkill = getSkill("strength");
    if (attackSkill.level < tool.attackLevelRequirement) {
      pushLog(`You need attack level ${tool.attackLevelRequirement} to wield a ${tool.name}.`);
      return;
    }
    if (strengthSkill.level < tool.strengthLevelRequirement) {
      pushLog(`You need strength level ${tool.strengthLevelRequirement} to wield a ${tool.name}.`);
      return;
    }
  } else if (type === "armor") {
    const defenseSkill = getSkill("defense");
    const hitpointsSkill = getSkill("hitpoints");
    if (defenseSkill.level < tool.defenseLevelRequirement) {
      pushLog(`You need defense level ${tool.defenseLevelRequirement} to wear a ${tool.name}.`);
      return;
    }
    if (hitpointsSkill.level < tool.hitpointsLevelRequirement) {
      pushLog(`You need hitpoints level ${tool.hitpointsLevelRequirement} to wear a ${tool.name}.`);
      return;
    }
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
  state.equipment[equipKey] = tool.id;
  state.inventory[`${tool.id}_item`] = (state.inventory[`${tool.id}_item`] || 0) + 1;
  refreshEquipmentLabels();
  if (type === "pickaxe") {
    updateMiningStats();
  } else if (type === "axe") {
    updateWoodcuttingStats();
  } else if (type === "rod") {
    updateFishingStats();
  } else {
    updateCombatStats();
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
      const slotData = slot.data || {};
      const slotSkills = slotData.skills || {};
      const miningSkillData = slotSkills.mining || slotData.miningSkill || {};
      const miningLevel =
        miningSkillData.level != null ? miningSkillData.level : 1;
      const smithingSkillData = slotSkills.smithing || {};
      const smithingLevel =
        smithingSkillData.level != null ? smithingSkillData.level : 1;
      const labelName = slot.name || `Expedition ${index + 1}`;
      slotDetails.textContent = `${labelName} • Min ${miningLevel} / Sm ${smithingLevel} • ${
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
  const button = getClosestElement(event.target, "button[data-action]");
  if (!button) return;
  const slotElement = getClosestElement(button, ".save-slot");
  const slotIndex = Number(
    (slotElement && slotElement.dataset && slotElement.dataset.slotIndex) || -1
  );
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
  const slotInfo = saveSlots[index];
  const defaultName = (slotInfo && slotInfo.name) || `Expedition ${index + 1}`;
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
      version: 3,
      inventory: { ...state.inventory },
      skills: {
        mining: { level: state.skills.mining.level, xp: state.skills.mining.xp },
        smithing: { level: state.skills.smithing.level, xp: state.skills.smithing.xp },
        woodcutting: { level: state.skills.woodcutting.level, xp: state.skills.woodcutting.xp },
        fishing: { level: state.skills.fishing.level, xp: state.skills.fishing.xp },
        cooking: { level: state.skills.cooking.level, xp: state.skills.cooking.xp },
      },
      equipment: { ...state.equipment },
      ownedPickaxes: Array.from(state.ownedPickaxes),
      ownedAxes: Array.from(state.ownedAxes),
      ownedRods: Array.from(state.ownedRods),
      currentStoneId: state.currentStoneId,
      currentTreeId: state.currentTreeId,
      currentSpotId: state.currentSpotId,
      currentRecipeId: state.currentRecipeId,
      coins: state.coins,
      autoContinue: { ...state.autoContinue },
      log: state.log.slice(),
    };
  }

  function applySaveData(data) {
    Object.assign(state.inventory, createInitialInventory(), data.inventory || {});

    const savedSkills = data.skills || {};
    ["mining", "smithing", "woodcutting", "fishing", "cooking"].forEach((skillId) => {
      const target = getSkill(skillId);
      const saved = savedSkills[skillId] || {};
      const savedLevel = saved.level != null ? saved.level : 1;
      target.level = Math.min(MAX_LEVEL, Math.max(1, savedLevel));
      target.xpToNext = getXpToNext(target.level);
      if (target.level >= MAX_LEVEL) {
        target.xp = 0;
        target.xpToNext = 0;
      } else {
        const savedXp = saved.xp != null ? saved.xp : 0;
        target.xp = Math.min(savedXp, target.xpToNext);
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

  const fishingSkill = getSkill("fishing");
  const requestedSpot = data.currentSpotId || FISHING_SPOTS[0].id;
  const unlockedSpot =
    FISHING_SPOTS.find(
      (spot) => spot.id === requestedSpot && fishingSkill.level >= spot.levelRequirement
    ) ||
    [...FISHING_SPOTS]
      .reverse()
      .find((spot) => fishingSkill.level >= spot.levelRequirement) ||
    FISHING_SPOTS[0];
  state.currentSpotId = unlockedSpot.id;
  state.fishing.currentSpotId = unlockedSpot.id;

  const cookingSkill = getSkill("cooking");
  const requestedRecipe = data.currentRecipeId || COOKING_RECIPES[0].id;
  const unlockedRecipe =
    COOKING_RECIPES.find(
      (recipe) =>
        recipe.id === requestedRecipe && cookingSkill.level >= recipe.levelRequirement
    ) ||
    [...COOKING_RECIPES]
      .reverse()
      .find((recipe) => cookingSkill.level >= recipe.levelRequirement) ||
    COOKING_RECIPES[0];
  state.currentRecipeId = unlockedRecipe.id;
  state.cooking.currentRecipeId = unlockedRecipe.id;

  const autoContinueData = data.autoContinue || {};
  state.autoContinue.mining =
    typeof autoContinueData.mining === "boolean" ? autoContinueData.mining : true;
  state.autoContinue.woodcutting =
    typeof autoContinueData.woodcutting === "boolean"
      ? autoContinueData.woodcutting
      : true;
  state.autoContinue.fishing =
    typeof autoContinueData.fishing === "boolean" ? autoContinueData.fishing : true;
  state.autoContinue.cooking =
    typeof autoContinueData.cooking === "boolean" ? autoContinueData.cooking : true;
  if (elements.autoContinueMining) {
    elements.autoContinueMining.checked = state.autoContinue.mining;
  }
  if (elements.autoContinueWood) {
    elements.autoContinueWood.checked = state.autoContinue.woodcutting;
  }
  if (elements.autoContinueFishing) {
    elements.autoContinueFishing.checked = state.autoContinue.fishing;
  }
  if (elements.autoContinueCooking) {
    elements.autoContinueCooking.checked = state.autoContinue.cooking;
  }

  const equipment = data.equipment || {};
  state.equipment.pickaxeId = PICKAXES.some((pickaxe) => pickaxe.id === equipment.pickaxeId)
    ? equipment.pickaxeId
    : PICKAXES[0].id;
  state.equipment.axeId = AXES.some((axe) => axe.id === equipment.axeId)
    ? equipment.axeId
    : AXES[0].id;
  state.equipment.rodId = FISHING_RODS.some((rod) => rod.id === equipment.rodId)
    ? equipment.rodId
    : FISHING_RODS[0].id;

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
  state.ownedRods = new Set(
    Array.isArray(data.ownedRods) && data.ownedRods.length
      ? data.ownedRods
      : [state.equipment.rodId, FISHING_RODS[0].id]
  );
  state.ownedRods.add(state.equipment.rodId);

  state.coins = typeof data.coins === "number" ? data.coins : state.coins;

  state.inventory.worn_pickaxe_item = Math.max(1, state.inventory.worn_pickaxe_item || 0);
  state.inventory.worn_hatchet_item = Math.max(1, state.inventory.worn_hatchet_item || 0);
  state.inventory.worn_rod_item = Math.max(1, state.inventory.worn_rod_item || 0);

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
  renderSpotOptions();
  renderRecipeOptions();
  updateSpotDetails();
  updateRecipeDetails();
  updateFishingStats();
  updateCookingStats();
  renderMarket();
  updateTopReadouts();
  }
