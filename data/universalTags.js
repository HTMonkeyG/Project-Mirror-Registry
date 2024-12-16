const NBT = require("parsenbt-js")
  , producer = {};

exports.createUniversalTag = function (type, ...args) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createUniversalTag': Type name must be a string. Recieved ${typeof type}.`);

  if (producer[type])
    return producer[type](...args);

  throw new Error(`Failed to execute 'createUniversalTag': Type name provided ('${type}') is not a valid universal tag name.`);
};

producer.attribute = function () {
  var result = NBT.create(true);

  result["str>Name"] = "";
  result["f32>Base"] = 0;
  result["f32>DefaultMin"] = 0;
  result["f32>DefaultMax"] = 0;
  result["f32>Min"] = 0;
  result["f32>Max"] = 0;
  result["f32>Current"] = 0;
  result["list>Modifiers"] = ["comp"];
  result["list>TemporalBuffs"] = ["comp"];

  return result
};

producer.attributeModifier = function () {
  var result = NBT.create(true);

  result["str>Name"] = "";
  result["f32>Amount"] = 0;
  result["i32>Operation"] = 0;
  result["i32>Operand"] = 0;
  result["i64>UUIDMost"] = 0n;
  result["i64>UUIDLeast"] = 0n;

  return result
}

producer.bannerPattern = function (pattern, color) {
  var result = NBT.create(true);

  result["str>Pattern"] = pattern || "";
  result["i32>Color"] = color || 0;

  return result
};

producer.block = function (name, states, version) {
  var result = NBT.create(true);

  result["str>name"] = name || "minecraft:air";
  result["comp>states"] = states || NBT.create(true);
  result["i32>version"] = version || 1;

  return result
};

producer.blockEntity = function (id, x, y, z, isMovable, name) {
  var result = NBT.create(true);

  result["str>id"] = id || "";
  result["i32>x"] = x || 0;
  result["i32>y"] = y || 0;
  result["i32>z"] = z || 0;
  result["i8>isMovable"] = typeof isMovable == "undefined" ? true : !!isMovable;
  name && (result["str>CustomName"] = name);

  return result
};

producer.bookPage = function (text) {
  var result = NBT.create(true);

  result["str>text"] = text || "";
  result["str>photoname"] = "";

  return result
};

producer.chest = function () {
  var result = NBT.create(true);

  result["i8>forceunpair"] = void 0;
  result["i8>pairlead"] = void 0;
  result["i32>pairx"] = void 0;
  result["i32>pairz"] = void 0;
  result["i8>Findable"] = 0;
  result["str>LootTable"] = "";
  result["i32>LootTableSeed"] = 0;
  NBT.assign(result, producer.container());

  return result
};

producer.commandBlock = function () {
  var result = NBT.create(true);

  result["str>Command"] = "";
  result["i32>Version"] = 36;
  result["i32>SuccessCount"] = 0;
  result["str>CustomName"] = "";
  result["str>LastOutput"] = "";
  result["list>LastOutputParams"] = ["str"];
  result["i8>TrackOutput"] = 0;
  result["i64>LastExecution"] = 0n;
  result["i32>TickDelay"] = 0;
  result["i8>ExecuteOnFirstTick"] = 0;

  return result
};

producer.container = function () {
  var result = NBT.create(true);

  result["list>Items"] = ["comp"];

  return result
};

producer.effect = function (id, lvl) {
  var result = NBT.create(true);

  result["i8>Id"] = id || 0;
  result["i8>Amplifier"] = lvl || 0;
  result["i32>Duration"] = 0;
  result["i32>DurationEasy"] = 0;
  result["i32>DurationNormal"] = 0;
  result["i32>DurationHard"] = 0;
  result["i8>Ambient"] = 0;
  result["i8>ShowParticles"] = 0;
  result["i8>DisplayOnScreenTextureAnimation"] = 0;

  return result
}

producer.enchant = function (id, lvl) {
  var result = NBT.create(true);

  result["i16>id"] = id || 0;
  result["i16>lvl"] = lvl || 0;

  return result
};

producer.entity = function (id) {
  var result = NBT.create(true);

  result["str>identifier"] = id || "";
  result["list>definitions"] = ["str"];
  result["i64>UniqueID"] = 0n;
  result["list>Pos"] = ["f32", 0, 0, 0];
  result["list>Rotation"] = ["f32", 0, 0];
  result["list>Motion"] = ["f32", 0, 0, 0];
  result["i8>CustomNameVisible"] = 0;
  result["i32>LastDimensionId"] = 0;
  result["f32>FallDistance"] = 0;
  result["i16>Fire"] = 0;
  result["i8>OnGround"] = 0;
  result["i8>Invulnerable"] = 0;
  result["i32>PortalCooldown"] = 0;
  result["i8>IsGlobal"] = 0;
  result["i8>IsAutonomous"] = 0;
  result["comp>LinksTag"] = NBT.create(true);
  result["comp>LinksTag"]["i64>entityID"] = 0n;
  result["comp>LinksTag"]["i32>LinkID"] = 0;
  result["i8>LootDropped"] = 0;
  result["i8>Color"] = 0;
  result["i8>Color2"] = 0;
  result["i32>Strength"] = 0;
  result["i32>StrengthMax"] = 0;
  result["i8>Sheared"] = 0;
  result["i8>IsIllagerCaptain"] = 0;
  result["i64>OwnerNew"] = -1n;
  result["i8>Sitting"] = 0;
  result["i8>IsBaby"] = 0;
  result["i8>IsTamed"] = 0;
  result["i8>IsTrusting"] = 0;
  result["i8>IsOrphaned"] = 0;
  result["i8>IsAngry"] = 0;
  result["i8>IsOutOfControl"] = 0;
  result["i32>Variant"] = 0;
  result["i32>MarkVariant"] = 0;
  result["i8>Saddled"] = 0;
  result["i8>Chested"] = 0;
  result["i8>ShowBottom"] = 0;
  result["i8>IsGliding"] = 0;
  result["i8>IsSwimming"] = 0;
  result["i8>IsEating"] = 0;
  result["i8>IsScared"] = 0;
  result["i8>IsStunned"] = 0;
  result["i8>IsRoaring"] = 0;
  result["i32>SkinID"] = 0;
  result["i8>Persistent"] = 0;
  result["list>Tags"] = ["str"];

  return result;
};

producer.fireworkExplosion = function () {
  var result = NBT.create(true);

  result["a8>FireworkColor"] = [];
  result["a8>FireworkFade"] = [];
  result["i8>FireworkFlicker"] = 0;
  result["i8>FireworkTrail"] = 0;
  result["i8>FireworkType"] = 0;

  return result
}

producer.item = function (name, lore) {
  var result = NBT.create(true);

  result["i32>Damage"] = 0;
  result["comp>display"] = NBT.create(true);
  result["comp>display"]["str>Name"] = typeof name != "undefined" ? name : void 0;
  result["comp>display"]["list>Lore"] = ["str"].concat(lore || []);
  result["i32>RepairCost"] = 0;
  result["comp>minecraft:item_lock"] = NBT.create(true);
  // "lock_in_slot" or "lock_in_inventory"
  result["comp>minecraft:item_lock"]["mode"] = "";
  result["i8>minecraft:keep_on_death"] = 0;
  result["list>ench"] = ["comp"];

  return result
};

producer.itemListElement = function (slot, item) {
  var result = NBT.create(true);

  result["i8>Slot"] = slot || 0;
  NBT.assign(result, item);

  return result
};

producer.itemStack = function (id, count, name, lore) {
  var result = NBT.create(true);

  result["str>Name"] = id || "";
  result["i8>Count"] = count || 0;
  result["i16>Damage"] = 0;
  result["i8>WasPickedUp"] = 0;
  result["comp>Block"] = producer.block();
  result["comp>tag"] = producer.item(name, lore);
  result["list>CanDestroy"] = ["str"];
  result["list>CanPlaceOn"] = ["str"];

  return result
};

producer.mob = function (id) {
  var result = producer.entity(id);

  result["i64>limitedLife"] = 0n;
  result["i64>LeasherID"] = -1n;
  result["i32>TradeTier"] = 0;
  result["i32>TradeExperience"] = 0;
  result["i8>canPickupItems"] = 1;
  result["i8>hasSetCanPickupItems"] = 0;
  result["comp>persistingOffers"] = NBT.create(true);
  result["i32>persistingRiches"] = 0;
  result["list>Mainhand"] = [
    "comp",
    producer.itemStack("", 0)
  ];
  result["list>Offhand"] = [
    "comp",
    producer.itemStack("", 0)
  ];
  result["list>Armor"] = [
    "comp",
    producer.itemStack("", 0),
    producer.itemStack("", 0),
    producer.itemStack("", 0),
    producer.itemStack("", 0)
  ];
  result["i16>HurtTime"] = 0;
  result["i16>DeathTime"] = 0;
  result["i8>Dead"] = 0;
  result["i16>AttackTime"] = 0;
  result["i8>Surface"] = 0;
  result["i8>NaturalSpawn"] = 0;
  result["i64>TargetID"] = 0n;
  result["i8>hasBoundOrigin"] = 0;
  result["i32>boundX"] = 0;
  result["i32>boundY"] = 0;
  result["i32>boundZ"] = 0;
  result["list>Attributes"] = ["comp"];
  result["list>ActiveEffects"] = ["comp"];
  result["f32>BodyRot"] = 0;
  result["i8>WantsToBeJockey"] = 0;
  result["i8>IsPregnant"] = 0;
  result["i64>TargetCaptainID"] = 0n;

  return result
};

producer.mobSpawner = function () {
  var result = NBT.create(true);

  result["str>EntityIdentifier"] = "";
  result["i16>Delay"] = 0;
  result["i16>MinSpawnDelay"] = 0;
  result["i16>MaxSpawnDelay"] = 0;
  result["i16>SpawnCount"] = 0;
  result["i16>MaxNearbyEntities"] = 0;
  result["i16>RequiredPlayerRange"] = 0;
  result["i16>SpawnRange"] = 0;
  result["f32>DisplayEntityWidth"] = 0;
  result["f32>DisplayEntityHeight"] = 0;
  result["f32>DisplayEntityScale"] = 0;
  result["comp>SpawnData"] = NBT.create(true);
  //result["comp>Properties：属性组件。
  //result["str>TypeId：实体的命名空间ID。
  //result["i32>Weight：与其他生成权重相比，该生成被选中的概率。必须为正且至少为1。
  result["list>SpawnPotentials"] = ["comp"];
  //NBT复合标签/JSON对象：下一次生成。
  //NBT复合标签/JSON对象Properties：属性组件。
  //字符串TypeId：实体的命名空间ID。
  //result["i32>Weight

  return result
};
