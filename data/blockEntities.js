const NBT = require("parsenbt-js")
  , producer = {};

/**
 * Creates an empty block entity.
 * @param {String} id 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} z 
 * @param {Boolean} isMovable 
 * @param {String} name 
 * @returns 
 */
function create(id, x, y, z, isMovable, name) {
  var result = NBT.create();

  result["str>id"] = id || "";
  result["i32>x"] = x || 0;
  result["i32>y"] = y || 0;
  result["i32>z"] = z || 0;
  result["i8>isMovable"] = typeof isMovable == "undefined" ? true : !!isMovable;
  name && (result["str>CustomName"] = name);

  return result
};
exports.createTemplate = create;

/**
 * Create a block entity template with given block type.
 * @param {String} type 
 * @returns 
 */
exports.createBlockEntity = function (type) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createBlockEntity': The type name must be a string. Recieved ${typeof type}.`);

  if (type.indexOf("minecraft:") == 0)
    type = type.slice(10);

  if (producer[type])
    return producer[type](type);

  throw new Error(`Failed to execute 'createBlockEntity': The type name provided ('${type}') is not a valid block entity name.`);
}

producer.wall_banner = function (type) {
  var result = create("minecraft:" + type);

  result["i32>Base"] = 0;
  result["i32>Type"] = 0;
  result["list>Patterns"] = ["comp"];

  return result
};
producer.standing_banner = producer.wall_banner;

producer.beacon = function () {
  var result = create("minecraft:beacon");

  result["i32>primary"] = 0;
  result["i32>secondary"] = 0;

  return result
};

producer.bed = function () {
  var result = create("minecraft:bed");

  result["i8>color"] = 0;

  return result
};

producer.beehive = function (type) {
  var result = create("minecraft:" + type);

  result["i8>ShouldSpawnBees"] = 0;
  result["list>Occupants"] = ["comp"]

  return result
};
producer.bee_nest = producer.beehive;

producer.bell = function () {
  var result = create("minecraft:bell");

  result["i8>Ringing"] = 0;
  result["i32>Ticks"] = 0;
  result["i32>Direction"] = 0;

  return result
};

producer.brewing_stand = function () {
  var result = create("minecraft:brewing_stand");

  result["i16>FuelTotal"] = 0;
  result["i16>CookTime"] = 0;
  result["i16>FuelAmount"] = 0;
  result["list>Items"] = ["comp"];

  return result
};

producer.campfire = function (type) {
  var result = create("minecraft:" + type);

  for (var i = 1; i < 5; i++) {
    result["i32>ItemTime" + i] = 0;
    result["comp>Item" + i] = NBT.create();
  }

  return result
};
producer.soul_campfire = producer.campfire;

producer.cauldron = function () {
  var result = create("minecraft:cauldron");

  result["i16>PotionId"] = -1;
  result["i16>PotionType"] = -1;
  result["i32>CustomColor"] = 0;
  result["list>Items"] = ["comp"];

  return result
};

producer.chalkboard = function () {
  var result = create("minecraft:cauldron");

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