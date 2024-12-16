const NBT = require("parsenbt-js")
  , { createUniversalTag } = require("./universalTags.js")
  , producer = {};

exports.createItemTag = function (type) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createItemTag': Type name must be a string. Recieved ${typeof type}.`);

  if (producer[type])
    return producer[type]();

  return null
};

exports.createItemStack = function (type, count) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createItemStack': Type name must be a string. Recieved ${typeof type}.`);
  if (typeof count != "number" && typeof count != "undefined")
    throw new TypeError(`Failed to execute 'createItemStack': Count must be a number or an undefined. Recieved ${typeof count}.`);

  if (producer[type]) {
    var result = createUniversalTag("itemStack", type, count);
    result["i8>Count"] = count;
    result["comp>tag"] = producer[type]();
    return result
  }

  return null
};

producer.cod_bucket = function () {
  var result = createUniversalTag("item");

  result["i8>AppendCustomName"] = 0;
  result["str>CustomName"] = void 0;
  result["str>ColorID"] = void 0;
  result["str>Color2ID"] = void 0;
  result["str>BodyID"] = void 0;
  result["str>GroupName"] = void 0;

  return result;
};
producer.salmon_bucket = producer.cod_bucket;
producer.pufferfish_bucket = producer.cod_bucket;
producer.tropical_fish_bucket = producer.cod_bucket;
producer.axolotl_bucket = producer.cod_bucket;
producer.tadpole_bucket = producer.cod_bucket;

producer.lodestone_compass = function () {
  var result = createUniversalTag("item");

  result["i32>trackingHandle"] = 0;

  return result;
};
producer.compass = producer.lodestone_compass;

producer.filled_map = function () {
  var result = createUniversalTag("item");

  result["i8>map_is_init"] = 0;
  result["i64>map_uuid"] = 0n;
  result["i32>map_name_index"] = 0;
  result["i8>map_display_players"] = 0;
  result["i32>map_scale"] = 0;
  result["i8>map_is_scaling"] = 0;

  return result;
};

producer.leather_horse_armor = function () {
  var result = createUniversalTag("item");

  result["i32>customColor"] = 0;

  return result;
};
producer.iron_horse_armor = producer.leather_horse_armor;
producer.golden_horse_armor = producer.leather_horse_armor;
producer.diamond_horse_armor = producer.leather_horse_armor;

producer.glow_stick = function () {
  var result = createUniversalTag("item");

  result["i64>active_time"] = 0n;

  return result;
};

producer.banner = function () {
  var result = createUniversalTag("item");

  result["i32>Type"] = 0;
  result["list>Patterns"] = ["comp"];

  return result
};

producer.shield = function () {
  var result = createUniversalTag("item");

  result["i32>Base"] = 0;
  result["list>Patterns"] = ["comp"];

  return result
};

producer.firework_rocket = function () {
  var result = createUniversalTag("item");

  result["comp>Fireworks"] = NBT.create(true);
  result["comp>Fireworks"]["list>Explosions"] = ["comp"];
  result["i8>Flight"] = 0;

  return result
};

producer.firework_star = function () {
  var result = createUniversalTag("item");

  result["comp>FireworksItem"] = NBT.create(true);
  result["i32>customColor"] = 0;

  return result
};

producer.written_book = function () {
  var result = createUniversalTag("item");

  result["str>author"] = "";
  result["str>title"] = "";
  result["i64>xuid"] = 0n;
  result["list>pages"] = ["comp"];
  result["i32>generation"] = 0;

  return result
};

producer.writable_book = function () {
  var result = createUniversalTag("item");

  result["list>pages"] = ["comp"];

  return result
};

producer.undyed_shulker_box = function () {
  var result = createUniversalTag("item");

  NBT.assign(result, universalTags.createUniversalTag("container"));

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

producer.crossbow = function () {
  var result = createUniversalTag("item");

  result["comp>chargedItem"] = createUniversalTag("item");

  return result
};

producer.potion = function () {
  var result = createUniversalTag("item");

  result["i8>wasJustBrewed"] = 0;

  return result
};

producer.turtle_helmet = function () {
  var result = createUniversalTag("item");

  result["comp>Trim"] = NBT.create(true);
  result["comp>Trim"]["str>Material"] = "";
  result["comp>Trim"]["str>Pattern"] = "";

  return result
};
producer.leather_helmet = producer.turtle_helmet;
producer.chainmail_helmet = producer.turtle_helmet;
producer.iron_helmet = producer.turtle_helmet;
producer.diamond_helmet = producer.turtle_helmet;
producer.golden_helmet = producer.turtle_helmet;
producer.netherite_helmet = producer.turtle_helmet;
producer.leather_chestplate = producer.turtle_helmet;
producer.chainmail_chestplate = producer.turtle_helmet;
producer.iron_chestplate = producer.turtle_helmet;
producer.diamond_chestplate = producer.turtle_helmet;
producer.golden_chestplate = producer.turtle_helmet;
producer.netherite_chestplate = producer.turtle_helmet;
producer.leather_leggings = producer.turtle_helmet;
producer.chainmail_leggings = producer.turtle_helmet;
producer.iron_leggings = producer.turtle_helmet;
producer.diamond_leggings = producer.turtle_helmet;
producer.golden_leggings = producer.turtle_helmet;
producer.netherite_leggings = producer.turtle_helmet;
producer.leather_boots = producer.turtle_helmet;
producer.chainmail_boots = producer.turtle_helmet;
producer.iron_boots = producer.turtle_helmet;
producer.diamond_boots = producer.turtle_helmet;
producer.golden_boots = producer.turtle_helmet;
producer.netherite_boots = producer.turtle_helmet;