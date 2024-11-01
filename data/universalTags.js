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
  //整型Weight

  return result
};

producer.entity = function () {

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

  return result
};
