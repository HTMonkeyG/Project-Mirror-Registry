const NBT = require("parsenbt-js")
  , universalTags = require("./universalTags.js")
  , producer = {};

function create(id, x, y, z, isMovable, name) {
  var result = universalTags.createUniversalTag("blockEntity", id, x, y, z, isMovable, name);
  return result
}

/**
 * Create a block entity template with given block id.
 * @param {String} type - Type of the block
 * @returns {Object|null}
 */
exports.createBlockEntity = function (type) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createBlockEntity': Type name must be a string. Recieved ${typeof type}.`);

  if (type.indexOf("minecraft:") == 0)
    type = type.slice(10);

  if (producer[type])
    return producer[type](type);

  return null
}

producer.wall_banner = function () {
  var result = create("Banner");

  result["i32>Base"] = 0;
  result["i32>Type"] = 0;
  result["list>Patterns"] = ["comp"];

  return result
};
producer.standing_banner = producer.wall_banner;

producer.beacon = function () {
  var result = create("Beacon");

  result["i32>primary"] = 0;
  result["i32>secondary"] = 0;

  return result
};

producer.bed = function () {
  var result = create("Bed");

  result["i8>color"] = 0;

  return result
};

producer.beehive = function () {
  var result = create("Beehive");

  result["i8>ShouldSpawnBees"] = 0;
  result["list>Occupants"] = ["comp"]

  return result
};
producer.bee_nest = producer.beehive;

producer.bell = function () {
  var result = create("Bell");

  result["i8>Ringing"] = 0;
  result["i32>Ticks"] = 0;
  result["i32>Direction"] = 0;

  return result
};

producer.brewing_stand = function () {
  var result = create("BrewingStand");

  result["i16>FuelTotal"] = 0;
  result["i16>CookTime"] = 0;
  result["i16>FuelAmount"] = 0;
  result["list>Items"] = ["comp"];

  return result
};

producer.campfire = function () {
  var result = create("Campfire");

  for (var i = 1; i < 5; i++) {
    result["i32>ItemTime" + i] = 0;
    result["comp>Item" + i] = NBT.create(true);
  }

  return result
};
producer.soul_campfire = producer.campfire;

producer.cauldron = function () {
  var result = create("Cauldron");

  result["i16>PotionId"] = -1;
  result["i16>PotionType"] = -1;
  result["i32>CustomColor"] = 0;
  result["list>Items"] = ["comp"];

  return result
};

producer.chalkboard = function () {
  var result = create("Chalkboard");  // Uncertain

  result["i32>BaseX"] = 0;
  result["i32>BaseY"] = 0;
  result["i32>BaseZ"] = 0;
  result["i32>Size"] = 0;
  result["i8>OnGround"] = 0;
  result["i8>Locked"] = 0;
  result["i64>Owner"] = 0n;
  result["str>Text"] = "";

  return result
};

producer.compound_creator = function () {
  var result = create("CompoundCreator");  // Uncertain

  result["i32>itemId"] = 0;
  result["i16>itemAux"] = 0;
  result["i8>itemStack"] = 0;

  return result
};
producer.material_reducer = producer.compound_creator;
producer.element_constructor = producer.compound_creator;
producer.lab_table = producer.compound_creator;
producer.chemistry_table = producer.compound_creator;

producer.chest = function (type) {
  var result = create(type == "barrel" ? "Barrel" : type == "ender_chest" ? "EnderChest" : "Chest");

  Object.assign(result, universalTags.createUniversalTag("chest"));

  return result
};
producer.trapped_chest = producer.chest;
producer.barrel = producer.chest;
producer.ender_chest = producer.chest;

producer.chiseled_bookshelf = function () {
  var result = create("ChiseledBookshelf");

  result["list>Items"] = ["comp"];
  result["i32>LastInteractedSlot"] = 0;

  return result
};

producer.command_block = function (type) {
  var result = create("CommandBlock");

  result["i8>powered"] = 0;
  result["i8>auto"] = 0;
  result["i8>conditionMet"] = 0;
  result["i8>LPCondionalMode"] = 0;
  result["i8>LPRedstoneMode"] = 0;
  result["i32>LPCommandMode"] = type == "chain_command_block" ? 2 : type == "repeating_command_block" ? 1 : 0;
  result["i8>conditionalMode"] = 0;
  Object.assign(result, universalTags.createUniversalTag("commandBlock"));

  return result
};
producer.chain_command_block = producer.command_block;
producer.repeating_command_block = producer.command_block;

producer.powered_comparator = function () {
  var result = create("Comparator");

  result["i32>OutputSignal"] = 0;

  return result
};
producer.unpowered_comparator = producer.powered_comparator;

producer.conduit = function () {
  var result = create("Conduit");

  result["i32>Target"] = -1n;
  result["i8>Active"] = 0;

  return result
};

producer.enchanting_table = function () {
  var result = create("EnchantTable");

  result["str>CustomName"] = void 0;
  result["f32>rott"] = 0;

  return result
};

producer.end_gateway = function () {
  var result = create("EndGateway");

  result["i32>Age"] = 0;
  result["list>ExitPortal"] = ["i32", 0, 0, 0];

  return result
};

producer.flower_pot = function () {
  var result = create("FlowerPot");

  result["comp>PlantBlock"] = universalTags.createUniversalTag("block");

  return result
};

producer.furnace = function (type) {
  var result = create(type == "furnace" ? "Furnace" : type == "blast_furnace" ? "BlastFurnace" : "Smoker");
  result["i16>BurnTime"] = 0;
  result["i16>CookTime"] = 0;
  result["i16>BurnDuration"] = 0;
  result["i32>StoredXPInt"] = 0;
  result["list>Items"] = ["comp"];

  return result
};
producer.blast_furnace = producer.furnace;
producer.smoker = producer.furnace;

producer.hopper = function () {
  var result = create("FlowerPot");

  result["i32>TransferCooldown"] = 0;
  result["list>Items"] = ["comp"];

  return result
};

producer.frame = function () {
  var result = create("ItemFrame");

  result["f32>ItemRotation"] = 0;
  result["f32>ItemDropChance"] = 0;
  result["comp>Item"] = universalTags.createUniversalTag("itemStack");

  return result
};
producer.glow_frame = producer.frame;

producer.jigsaw = function () {
  var result = create("Jigsaw");

  result["str>name"] = "";
  result["str>target"] = "";
  result["str>target_pool"] = "";
  result["str>final_state"] = "";
  result["str>joint"] = "";

  return result
};

producer.jukebox = function () {
  var result = create("Jukebox");

  result["comp>RecordItem"] = universalTags.createUniversalTag("itemStack");

  return result
};

producer.lectern = function () {
  var result = create("Lectern");

  result["i8>hasBook"] = 0;
  result["i32>page"] = 0;
  result["i32>totalPages"] = 0;
  result["comp>book"] = universalTags.createUniversalTag("itemStack");

  return result
};

producer.lodestone = function () {
  var result = create("Lodestone");

  result["i32>trackingHandle"] = 0;

  return result
};

producer.mob_spawner = function () {
  var result = create("MobSpawner");

  Object.assign(result, universalTags.createUniversalTag("mobSpawner"));

  return result
};

producer.moving_block = function () {
  var result = create("MovingBlock");

  result["comp>movingBlock"] = universalTags.createUniversalTag("block");
  result["comp>movingBlockExtra"] = universalTags.createUniversalTag("block");
  result["i32>pistonPosX"] = 0;
  result["i32>pistonPosY"] = 0;
  result["i32>pistonPosZ"] = 0;
  result["comp>movingEntity"] = universalTags.createUniversalTag("blockEntity");

  return result
};

producer.noteblock = function () {
  var result = create("Music");

  result["i8>note"] = 0;

  return result
};

producer.netherreactor = function () {
  var result = create("NetherReactor");

  result["i8>HasFinished"] = 0;
  result["i8>IsInitialized"] = 0;
  result["i16>Progress"] = 0;

  return result
};

producer.piston = function () {
  var result = create("PistonArm");

  result["f32>Progress"] = 0;
  result["f32>LastProgress"] = 0;
  result["i8>State"] = 0;
  result["i8>NewState"] = 0;
  result["i8>Sticky"] = 0;
  result["list>AttachedBlocks"] = ["i32"];
  result["list>BreakBlocks"] = ["i32"];

  return result
}
producer.sticky_piston = producer.piston;
producer.piston_arm_collision = producer.piston;
producer.sticky_piston_arm_collision = producer.piston;

producer.undyed_shulker_box = function () {
  var result = create("ShulkerBox");

  Object.assign(result, universalTags.createUniversalTag("chest"));
  result["f32>facing"] = 0;

  return result
};
producer.white_shulker_box = producer.undyed_shulker_box;
producer.orange_shulker_box = producer.undyed_shulker_box;
producer.magenta_shulker_box = producer.undyed_shulker_box;
producer.light_blue_shulker_box = producer.undyed_shulker_box;
producer.yellow_shulker_box = producer.undyed_shulker_box;
producer.lime_shulker_box = producer.undyed_shulker_box;
producer.pink_shulker_box = producer.undyed_shulker_box;
producer.gray_shulker_box = producer.undyed_shulker_box;
producer.light_gray_shulker_box = producer.undyed_shulker_box;
producer.cyan_shulker_box = producer.undyed_shulker_box;
producer.purple_shulker_box = producer.undyed_shulker_box;
producer.blue_shulker_box = producer.undyed_shulker_box;
producer.brown_shulker_box = producer.undyed_shulker_box;
producer.green_shulker_box = producer.undyed_shulker_box;
producer.red_shulker_box = producer.undyed_shulker_box;
producer.black_shulker_box = producer.undyed_shulker_box;

producer.standing_sign = function () {
  var result = create("Sign");

  result["str>TextOwner"] = "";
  result["i8>IgnoreLighting"] = 0;
  result["i32>SignTextColor"] = 0;
  result["i8>TextIgnoreLegacyBugResolved"] = 0;
  result["str>Text"] = "";

  return result
};
producer.spruce_standing_sign = producer.standing_sign;
producer.birch_standing_sign = producer.standing_sign;
producer.jungle_standing_sign = producer.standing_sign;
producer.acacia_standing_sign = producer.standing_sign;
producer.darkoak_standing_sign = producer.standing_sign;
producer.mangrove_standing_sign = producer.standing_sign;
producer.cherry_standing_sign = producer.standing_sign;
producer.pale_oak_standing_sign = producer.standing_sign;
producer.bamboo_standing_sign = producer.standing_sign;
producer.crimson_standing_sign = producer.standing_sign;
producer.warped_standing_sign = producer.standing_sign;
producer.wall_sign = producer.standing_sign;
producer.spruce_wall_sign = producer.standing_sign;
producer.birch_wall_sign = producer.standing_sign;
producer.jungle_wall_sign = producer.standing_sign;
producer.acacia_wall_sign = producer.standing_sign;
producer.darkoak_wall_sign = producer.standing_sign;
producer.mangrove_wall_sign = producer.standing_sign;
producer.cherry_wall_sign = producer.standing_sign;
producer.pale_oak_wall_sign = producer.standing_sign;
producer.bamboo_wall_sign = producer.standing_sign;
producer.crimson_wall_sign = producer.standing_sign;
producer.warped_wall_sign = producer.standing_sign;

producer.skeleton_skull = function () {
  var result = create("Skull");

  result["i8>SkullType"] = 0;
  result["f32>Rotation"] = 0;
  result["i8>MouthMoving"] = 0;
  result["i32>MouthTickCount"] = 0;

  return result
};
producer.wither_skeleton_skull = producer.skeleton_skull;
producer.zombie_head = producer.skeleton_skull;
producer.player_head = producer.skeleton_skull;
producer.creeper_head = producer.skeleton_skull;
producer.dragon_head = producer.skeleton_skull;
producer.piglin_head = producer.skeleton_skull;

producer.suspicious_gravel = function () {
  var result = create("BrushableBlock");

  result["str>LootTable"] = "";
  result["i32>LootTableSeed"] = 0;
  result["i32>brush_count"] = 0;
  result["i8>brush_direction"] = 0;
  result["i8>type"] = 0;

  return result
};
producer.suspicious_sand = producer.suspicious_gravel;

producer.structure_block = function () {
  var result = create("StructureBlock");

  result["i8>isPowered"] = 0;
  result["i32>data"] = 0;
  result["i32>redstoneSaveMode"] = 0;
  result["i32>xStructureOffset"] = 0;
  result["i32>yStructureOffset"] = 0;
  result["i32>zStructureOffset"] = 0;
  result["i32>xStructureSize"] = 0;
  result["i32>yStructureSize"] = 0;
  result["i32>zStructureSize"] = 0;
  result["str>structureName"] = "";
  result["str>dataField"] = "";
  result["i8>ignoreEntities"] = 0;
  result["i8>includePlayers"] = 0;
  result["i8>removeBlocks"] = 0;
  result["i8>showBoundingBox"] = 0;
  result["i8>rotation"] = 0;
  result["i8>mirror"] = 0;
  result["i8>animationMode"] = 0;
  result["f32>animationSeconds"] = 0;
  result["f32>integrity"] = 0;
  result["i64>seed"] = 0n;

  return result
};