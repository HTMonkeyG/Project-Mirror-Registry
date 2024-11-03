const NBT = require("parsenbt-js")
  , producer = {};

exports.createUniversalTag = function (type, ...args) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createUniversalTag': The type name must be a string. Recieved ${typeof type}.`);

  if (producer[type])
    return producer[type](...args);

  throw new Error(`Failed to execute 'createUniversalTag': The type name provided ('${type}') is not a valid universal tag name.`);
};

producer.commandBlock = function () {
  var result = NBT.create();

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

producer.itemStack = function (id, count, damage) {
  var result = NBT.create();

  result["str>Name"] = id || "";
  result["i8>Count"] = count || 0;
  result["i16>Damage"] = damage || 0;
  result["i8>WasPickedUp"] = 0;
  result["comp>Block"] = createUniversalTag("block");
  result["comp>tag"] = NBT.create();
  result["list>CanDestroy"] = ["str"];
  result["list>CanPlaceOn"] = ["str"];

  return result
};

producer.chest = function () {
  var result = NBT.create();

  result["i8>forceunpair"] = void 0;
  result["i8>pairlead"] = void 0;
  result["i32>pairx"] = void 0;
  result["i32>pairz"] = void 0;
  result["i8>Findable"] = 0;
  result["str>LootTable"] = "";
  result["i32>LootTableSeed"] = 0;
  result["list>Items"] = ["comp"];

  return result
};

producer.mobSpawner = function () {
  var result = NBT.create();

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
  result["comp>SpawnData"] = NBT.create();
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

producer.entity = function () {
  var result = NBT.create();

  result["str>identifier"] = "";
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
  result["comp>LinksTag"] = NBT.create();
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

producer.block = function (name, states, version) {
  var result = NBT.create();

  result["str>name"] = name || "minecraft:air";
  result["comp>states"] = states || NBT.create();
  result["i32>version"] = version || 1;

  return result
};

producer.blockEntity = function (id, x, y, z, isMovable, name) {
  var result = NBT.create();

  result["str>id"] = id || "";
  result["i32>x"] = x || 0;
  result["i32>y"] = y || 0;
  result["i32>z"] = z || 0;
  result["i8>isMovable"] = typeof isMovable == "undefined" ? true : !!isMovable;
  name && (result["str>CustomName"] = name);

  return result
};

producer.itemListElement = function (slot, item) {
  var result = NBT.create();

  result["i8>Slot"] = slot || 0;
  Object.assign(result, item);

  return result
};
