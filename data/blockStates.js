const producer = {};

function createState(defaultVal, accept, mask) {
  return Object.freeze({
    default: defaultVal,
    mask: mask,
    accept: typeof accept == "object" ? Object.freeze(accept) : accept
  })
}

exports.getBlockState = function (type) {
  if (typeof type != "string")
    throw new TypeError(`Failed to execute 'createBlockState': The type name must be a string. Recieved ${typeof type}.`);

  if (producer[type])
    return producer[type];

  return null

  //throw new Error(`Failed to execute 'createBlockState': The type name provided ('${type}') is not a valid block name.`);
};

producer.acacia_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.acacia_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.acacia_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.acacia_fence = {
  "wood_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.acacia_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.acacia_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.acacia_leaves = {
  "new_leaf_type": createState("acacia", ["acacia", "dark_oak"]),
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.acacia_log = {
  "new_log_type": createState("acacia", ["acacia", "dark_oak"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.acacia_planks = {
  "wood_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.acacia_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.acacia_sapling = {
  "age_bit": createState(false, ["false", "true"]),
  "sapling_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "pale_oak"]),
};
producer.acacia_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.acacia_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.acacia_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.acacia_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.acacia_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.acacia_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(false, ["false", "true"]),
  "wood_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.activator_rail = {
  "rail_data_bit": createState(false, ["false", "true"]),
  "rail_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
};
producer.allium = {
  "flower_type": createState("allium", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.amethyst_cluster = {
  "facing_direction": createState(1, [0, 1, 2, 3, 4, 5]),
  "minecraft:block_face": createState("up", ["down", "up", "north", "south", "west", "east"]),
};
producer.andesite = {
  "stone_type": createState("andesite", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.andesite_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("andesite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.andesite_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("andesite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.andesite_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.andesite_wall = {
  "wall_block_type": createState("andesite", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.anvil = {
  "damage": createState("undamaged", ["undamaged", "slightly_damaged", "very_damaged", "broken"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.azalea_leaves = {
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.azalea_leaves_flowered = {
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.azure_bluet = {
  "flower_type": createState("houstonia", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.bamboo = {
  "age_bit": createState(false, ["false", "true"]),
  "bamboo_leaf_size": createState("no_leaves", ["no_leaves", "small_leaves", "large_leaves"]),
  "bamboo_stalk_thickness": createState("thin", ["thin", "thick"]),
};
producer.bamboo_block = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.bamboo_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.bamboo_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.bamboo_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.bamboo_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.bamboo_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.bamboo_mosaic_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.bamboo_mosaic_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.bamboo_mosaic_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.bamboo_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.bamboo_sapling = {
  "age_bit": createState(false, ["false", "true"]),
};
producer.bamboo_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.bamboo_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.bamboo_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.bamboo_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.bamboo_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.barrel = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.basalt = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.bed = {
  "direction": createState(0, [0, 1, 2, 3]),
  "head_piece_bit": createState(false, ["false", "true"]),
  "occupied_bit": createState(false, ["false", "true"]),
};
producer.bedrock = {
  "infiniburn_bit": createState(false, ["false", "true"]),
};
producer.bee_nest = {
  "direction": createState(0, [0, 1, 2, 3]),
  "honey_level": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.beehive = {
  "direction": createState(0, [0, 1, 2, 3]),
  "honey_level": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.beetroot = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.bell = {
  "attachment": createState("standing", ["standing", "hanging", "side", "multiple"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "toggle_bit": createState(false, ["false", "true"]),
};
producer.big_dripleaf = {
  "big_dripleaf_head": createState(true, ["false", "true"]),
  "big_dripleaf_tilt": createState("none", ["none", "unstable", "partial_tilt", "full_tilt"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.birch_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.birch_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.birch_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.birch_fence = {
  "wood_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.birch_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.birch_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.birch_leaves = {
  "old_leaf_type": createState("birch", ["oak", "spruce", "birch", "jungle"]),
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.birch_log = {
  "old_log_type": createState("birch", ["oak", "spruce", "birch", "jungle"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.birch_planks = {
  "wood_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.birch_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.birch_sapling = {
  "age_bit": createState(false, ["false", "true"]),
  "sapling_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "pale_oak"]),
};
producer.birch_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.birch_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.birch_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.birch_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.birch_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.birch_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(false, ["false", "true"]),
  "wood_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.black_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.black_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.black_carpet = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_concrete = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_concrete_powder = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.black_shulker_box = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_stained_glass = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_stained_glass_pane = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_terracotta = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.black_wool = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blackstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.blackstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.blackstone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.blackstone_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.blast_furnace = {
  "facing_direction": createState(3, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.blue_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.blue_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.blue_carpet = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_concrete = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_concrete_powder = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.blue_orchid = {
  "flower_type": createState("orchid", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.blue_shulker_box = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_stained_glass = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_stained_glass_pane = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_terracotta = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.blue_wool = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.bone_block = {
  "deprecated": createState(0, [0, 1, 2, 3]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.border_block = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.brain_coral = {
  "coral_color": createState("pink", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.brain_coral_block = {
  "coral_color": createState("pink", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.brain_coral_fan = {
  "coral_color": createState("pink", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.brain_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(true, ["false", "true"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.brewing_stand = {
  "brewing_stand_slot_a_bit": createState(false, ["false", "true"]),
  "brewing_stand_slot_b_bit": createState(false, ["false", "true"]),
  "brewing_stand_slot_c_bit": createState(false, ["false", "true"]),
};
producer.brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("brick", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("brick", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.brick_wall = {
  "wall_block_type": createState("brick", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.brown_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.brown_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.brown_carpet = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_concrete = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_concrete_powder = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.brown_mushroom_block = {
  "huge_mushroom_bits": createState(14, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.brown_shulker_box = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_stained_glass = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_stained_glass_pane = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_terracotta = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.brown_wool = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.bubble_column = {
  "drag_down": createState(false, ["false", "true"]),
};
producer.bubble_coral = {
  "coral_color": createState("purple", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.bubble_coral_block = {
  "coral_color": createState("purple", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.bubble_coral_fan = {
  "coral_color": createState("purple", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.bubble_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(false, ["false", "true"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.cactus = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.cake = {
  "bite_counter": createState(0, [0, 1, 2, 3, 4, 5, 6]),
};
producer.calibrated_sculk_sensor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "sculk_sensor_phase": createState(0, [0, 1, 2]),
};
producer.campfire = {
  "direction": createState(0, [0, 1, 2, 3]),
  "extinguished": createState(false, ["false", "true"]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.carrots = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.carved_pumpkin = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.cauldron = {
  "cauldron_liquid": createState("water", ["water", "lava", "powder_snow"]),
  "fill_level": createState(0, [0, 1, 2, 3, 4, 5, 6]),
};
producer.cave_vines = {
  "growing_plant_age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
};
producer.cave_vines_body_with_berries = {
  "growing_plant_age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
};
producer.cave_vines_head_with_berries = {
  "growing_plant_age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
};
producer.chain = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.chain_command_block = {
  "conditional_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.chalkboard = {
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.cherry_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.cherry_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.cherry_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cherry_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.cherry_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.cherry_leaves = {
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.cherry_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.cherry_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.cherry_sapling = {
  "age_bit": createState(false, ["false", "true"]),
};
producer.cherry_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cherry_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.cherry_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.cherry_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.cherry_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.cherry_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.chest = {
  "facing_direction": createState(2, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("north", ["south", "west", "north", "east"]),
};
producer.chipped_anvil = {
  "damage": createState("slightly_damaged", ["undamaged", "slightly_damaged", "very_damaged", "broken"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.chiseled_bookshelf = {
  "books_stored": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.chiseled_quartz_block = {
  "chisel_type": createState("chiseled", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.chiseled_red_sandstone = {
  "sand_stone_type": createState("heiroglyphs", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.chiseled_sandstone = {
  "sand_stone_type": createState("heiroglyphs", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.chiseled_stone_bricks = {
  "stone_brick_type": createState("chiseled", ["default", "mossy", "cracked", "chiseled", "smooth"]),
};
producer.chorus_flower = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.coarse_dirt = {
  "dirt_type": createState("coarse", ["normal", "coarse"]),
};
producer.cobbled_deepslate_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cobbled_deepslate_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cobbled_deepslate_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.cobbled_deepslate_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.cobblestone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("cobblestone", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cobblestone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("cobblestone", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cobblestone_wall = {
  "wall_block_type": createState("cobblestone", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.cocoa = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.colored_torch_blue = {
  "color_bit": createState(false, ["false", "true"]),
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.colored_torch_green = {
  "color_bit": createState(true, ["false", "true"]),
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.colored_torch_purple = {
  "color_bit": createState(true, ["false", "true"]),
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.colored_torch_red = {
  "color_bit": createState(false, ["false", "true"]),
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.command_block = {
  "conditional_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.composter = {
  "composter_fill_level": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8]),
};
producer.compound_creator = {
  "chemistry_table_type": createState("compound_creator", ["compound_creator", "material_reducer", "element_constructor", "lab_table"]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.cornflower = {
  "flower_type": createState("cornflower", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.cracked_stone_bricks = {
  "stone_brick_type": createState("cracked", ["default", "mossy", "cracked", "chiseled", "smooth"]),
};
producer.crafter = {
  "crafting": createState(false, ["false", "true"]),
  "orientation": createState("down_east", ["down_east", "down_north", "down_south", "down_west", "up_east", "up_north", "up_south", "up_west", "west_up", "east_up", "north_up", "south_up"]),
  "triggered_bit": createState(false, ["false", "true"]),
};
producer.creaking_heart = {
  "active": createState(false, ["false", "true"]),
  "natural": createState(false, ["false", "true"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.creeper_head = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.crimson_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.crimson_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.crimson_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.crimson_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.crimson_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.crimson_hyphae = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.crimson_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.crimson_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.crimson_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.crimson_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.crimson_stem = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.crimson_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.crimson_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.cut_red_sandstone = {
  "sand_stone_type": createState("cut", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.cut_red_sandstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("cut_red_sandstone", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cut_red_sandstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("cut_red_sandstone", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cut_sandstone = {
  "sand_stone_type": createState("cut", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.cut_sandstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("cut_sandstone", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cut_sandstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("cut_sandstone", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.cyan_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.cyan_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.cyan_carpet = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_concrete = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_concrete_powder = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.cyan_shulker_box = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_stained_glass = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_stained_glass_pane = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_terracotta = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.cyan_wool = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.damaged_anvil = {
  "damage": createState("very_damaged", ["undamaged", "slightly_damaged", "very_damaged", "broken"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.dark_oak_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.dark_oak_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.dark_oak_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.dark_oak_fence = {
  "wood_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.dark_oak_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.dark_oak_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.dark_oak_leaves = {
  "new_leaf_type": createState("dark_oak", ["acacia", "dark_oak"]),
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.dark_oak_log = {
  "new_log_type": createState("dark_oak", ["acacia", "dark_oak"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.dark_oak_planks = {
  "wood_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.dark_oak_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.dark_oak_sapling = {
  "age_bit": createState(false, ["false", "true"]),
  "sapling_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "pale_oak"]),
};
producer.dark_oak_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.dark_oak_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.dark_oak_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.dark_oak_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(false, ["false", "true"]),
  "wood_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.dark_prismarine = {
  "prismarine_block_type": createState("dark", ["default", "dark", "bricks"]),
};
producer.dark_prismarine_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("prismarine_dark", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.dark_prismarine_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("prismarine_dark", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.dark_prismarine_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.darkoak_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.darkoak_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.daylight_detector = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.daylight_detector_inverted = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.dead_brain_coral = {
  "coral_color": createState("pink", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_brain_coral_block = {
  "coral_color": createState("pink", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_brain_coral_fan = {
  "coral_color": createState("pink", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.dead_brain_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(true, ["false", "true"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_bubble_coral = {
  "coral_color": createState("purple", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_bubble_coral_block = {
  "coral_color": createState("purple", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_bubble_coral_fan = {
  "coral_color": createState("purple", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.dead_bubble_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(false, ["false", "true"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_fire_coral = {
  "coral_color": createState("red", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_fire_coral_block = {
  "coral_color": createState("red", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_fire_coral_fan = {
  "coral_color": createState("red", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.dead_fire_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(true, ["false", "true"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_horn_coral = {
  "coral_color": createState("yellow", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_horn_coral_block = {
  "coral_color": createState("yellow", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_horn_coral_fan = {
  "coral_color": createState("yellow", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.dead_horn_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(false, ["false", "true"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_tube_coral = {
  "coral_color": createState("blue", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_tube_coral_block = {
  "coral_color": createState("blue", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.dead_tube_coral_fan = {
  "coral_color": createState("blue", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.dead_tube_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(false, ["false", "true"]),
  "dead_bit": createState(true, ["false", "true"]),
};
producer.decorated_pot = {
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.deepslate = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.deepslate_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.deepslate_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.deepslate_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.deepslate_brick_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.deepslate_tile_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.deepslate_tile_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.deepslate_tile_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.deepslate_tile_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.deprecated_anvil = {
  "damage": createState("broken", ["undamaged", "slightly_damaged", "very_damaged", "broken"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.deprecated_purpur_block_1 = {
  "chisel_type": createState("chiseled", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.deprecated_purpur_block_2 = {
  "chisel_type": createState("smooth", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.detector_rail = {
  "rail_data_bit": createState(false, ["false", "true"]),
  "rail_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
};
producer.diorite = {
  "stone_type": createState("diorite", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.diorite_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("diorite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.diorite_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("diorite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.diorite_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.diorite_wall = {
  "wall_block_type": createState("diorite", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.dirt = {
  "dirt_type": createState("normal", ["normal", "coarse"]),
};
producer.dispenser = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "triggered_bit": createState(false, ["false", "true"]),
};
producer.double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.dragon_head = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.dropper = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "triggered_bit": createState(false, ["false", "true"]),
};
producer.element_constructor = {
  "chemistry_table_type": createState("element_constructor", ["compound_creator", "material_reducer", "element_constructor", "lab_table"]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.end_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.end_portal_frame = {
  "direction": createState(0, [0, 1, 2, 3]),
  "end_portal_eye_bit": createState(false, ["false", "true"]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.end_rod = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.end_stone_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("end_stone_brick", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.end_stone_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("end_stone_brick", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.end_stone_brick_wall = {
  "wall_block_type": createState("end_brick", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.ender_chest = {
  "facing_direction": createState(2, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("north", ["south", "west", "north", "east"]),
};
producer.exposed_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.exposed_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.exposed_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.exposed_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.exposed_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.exposed_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.farmland = {
  "moisturized_amount": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.fern = {
  "tall_grass_type": createState("fern", ["default", "tall", "fern", "snow"]),
};
producer.fire = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.fire_coral = {
  "coral_color": createState("red", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.fire_coral_block = {
  "coral_color": createState("red", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.fire_coral_fan = {
  "coral_color": createState("red", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.fire_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(true, ["false", "true"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.flower_pot = {
  "update_bit": createState(false, ["false", "true"]),
};
producer.flowing_lava = {
  "liquid_depth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.flowing_water = {
  "liquid_depth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.frame = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "item_frame_map_bit": createState(false, ["false", "true"]),
  "item_frame_photo_bit": createState(false, ["false", "true"]),
};
producer.frosted_ice = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.furnace = {
  "facing_direction": createState(3, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.glow_frame = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "item_frame_map_bit": createState(false, ["false", "true"]),
  "item_frame_photo_bit": createState(false, ["false", "true"]),
};
producer.glow_lichen = {
  "multi_face_direction_bits": createState(63, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]),
};
producer.golden_rail = {
  "rail_data_bit": createState(false, ["false", "true"]),
  "rail_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
};
producer.granite = {
  "stone_type": createState("granite", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.granite_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("granite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.granite_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("granite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.granite_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.granite_wall = {
  "wall_block_type": createState("granite", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.gray_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.gray_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.gray_carpet = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_concrete = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_concrete_powder = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.gray_shulker_box = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_stained_glass = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_stained_glass_pane = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_terracotta = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.gray_wool = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.green_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.green_carpet = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_concrete = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_concrete_powder = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.green_shulker_box = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_stained_glass = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_stained_glass_pane = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_terracotta = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.green_wool = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.grindstone = {
  "attachment": createState("standing", ["standing", "hanging", "side", "multiple"]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.hard_black_stained_glass = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_black_stained_glass_pane = {
  "color": createState("black", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_blue_stained_glass = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_blue_stained_glass_pane = {
  "color": createState("blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_brown_stained_glass = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_brown_stained_glass_pane = {
  "color": createState("brown", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_cyan_stained_glass = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_cyan_stained_glass_pane = {
  "color": createState("cyan", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_gray_stained_glass = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_gray_stained_glass_pane = {
  "color": createState("gray", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_green_stained_glass = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_green_stained_glass_pane = {
  "color": createState("green", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_light_blue_stained_glass = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_light_blue_stained_glass_pane = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_light_gray_stained_glass = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_light_gray_stained_glass_pane = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_lime_stained_glass = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_lime_stained_glass_pane = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_magenta_stained_glass = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_magenta_stained_glass_pane = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_orange_stained_glass = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_orange_stained_glass_pane = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_pink_stained_glass = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_pink_stained_glass_pane = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_purple_stained_glass = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_purple_stained_glass_pane = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_red_stained_glass = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_red_stained_glass_pane = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_white_stained_glass = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_white_stained_glass_pane = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_yellow_stained_glass = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hard_yellow_stained_glass_pane = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.hay_block = {
  "deprecated": createState(0, [0, 1, 2, 3]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.heavy_weighted_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.hopper = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "toggle_bit": createState(false, ["false", "true"]),
};
producer.horn_coral = {
  "coral_color": createState("yellow", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.horn_coral_block = {
  "coral_color": createState("yellow", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.horn_coral_fan = {
  "coral_color": createState("yellow", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.horn_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(false, ["false", "true"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.infested_chiseled_stone_bricks = {
  "monster_egg_stone_type": createState("chiseled_stone_brick", ["stone", "cobblestone", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick"]),
};
producer.infested_cobblestone = {
  "monster_egg_stone_type": createState("cobblestone", ["stone", "cobblestone", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick"]),
};
producer.infested_cracked_stone_bricks = {
  "monster_egg_stone_type": createState("cracked_stone_brick", ["stone", "cobblestone", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick"]),
};
producer.infested_deepslate = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.infested_mossy_stone_bricks = {
  "monster_egg_stone_type": createState("mossy_stone_brick", ["stone", "cobblestone", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick"]),
};
producer.infested_stone = {
  "monster_egg_stone_type": createState("stone", ["stone", "cobblestone", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick"]),
};
producer.infested_stone_bricks = {
  "monster_egg_stone_type": createState("stone_brick", ["stone", "cobblestone", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick"]),
};
producer.iron_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.iron_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.jigsaw = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "rotation": createState(0, [0, 1, 2, 3]),
};
producer.jungle_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.jungle_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.jungle_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.jungle_fence = {
  "wood_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.jungle_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.jungle_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.jungle_leaves = {
  "old_leaf_type": createState("jungle", ["oak", "spruce", "birch", "jungle"]),
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.jungle_log = {
  "old_log_type": createState("jungle", ["oak", "spruce", "birch", "jungle"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.jungle_planks = {
  "wood_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.jungle_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.jungle_sapling = {
  "age_bit": createState(false, ["false", "true"]),
  "sapling_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "pale_oak"]),
};
producer.jungle_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.jungle_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.jungle_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.jungle_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.jungle_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.jungle_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(false, ["false", "true"]),
  "wood_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.kelp = {
  "kelp_age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
};
producer.lab_table = {
  "chemistry_table_type": createState("lab_table", ["compound_creator", "material_reducer", "element_constructor", "lab_table"]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.ladder = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.lantern = {
  "hanging": createState(false, ["false", "true"]),
};
producer.large_amethyst_bud = {
  "facing_direction": createState(1, [0, 1, 2, 3, 4, 5]),
  "minecraft:block_face": createState("up", ["down", "up", "north", "south", "west", "east"]),
};
producer.large_fern = {
  "double_plant_type": createState("fern", ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.lava = {
  "liquid_depth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.lectern = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.lever = {
  "lever_direction": createState("down_east_west", ["down_east_west", "east", "west", "south", "north", "up_north_south", "up_east_west", "down_north_south"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.light_block_0 = {
  "block_light_level": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_1 = {
  "block_light_level": createState(1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_10 = {
  "block_light_level": createState(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_11 = {
  "block_light_level": createState(11, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_12 = {
  "block_light_level": createState(12, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_13 = {
  "block_light_level": createState(13, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_14 = {
  "block_light_level": createState(14, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_15 = {
  "block_light_level": createState(15, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_2 = {
  "block_light_level": createState(2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_3 = {
  "block_light_level": createState(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_4 = {
  "block_light_level": createState(4, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_5 = {
  "block_light_level": createState(5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_6 = {
  "block_light_level": createState(6, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_7 = {
  "block_light_level": createState(7, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_8 = {
  "block_light_level": createState(8, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_block_9 = {
  "block_light_level": createState(9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.light_blue_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.light_blue_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.light_blue_carpet = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_concrete = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_concrete_powder = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.light_blue_shulker_box = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_stained_glass = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_stained_glass_pane = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_terracotta = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_blue_wool = {
  "color": createState("light_blue", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.light_gray_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.light_gray_carpet = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_concrete = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_concrete_powder = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_shulker_box = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_stained_glass = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_stained_glass_pane = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_terracotta = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_gray_wool = {
  "color": createState("silver", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.light_weighted_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.lightning_rod = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.lilac = {
  "double_plant_type": createState("syringa", ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.lily_of_the_valley = {
  "flower_type": createState("lily_of_the_valley", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.lime_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.lime_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.lime_carpet = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_concrete = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_concrete_powder = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.lime_shulker_box = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_stained_glass = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_stained_glass_pane = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_terracotta = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lime_wool = {
  "color": createState("lime", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.lit_blast_furnace = {
  "facing_direction": createState(3, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.lit_furnace = {
  "facing_direction": createState(3, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.lit_pumpkin = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.lit_smoker = {
  "facing_direction": createState(3, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.loom = {
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.magenta_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.magenta_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.magenta_carpet = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_concrete = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_concrete_powder = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.magenta_shulker_box = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_stained_glass = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_stained_glass_pane = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_terracotta = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.magenta_wool = {
  "color": createState("magenta", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.mangrove_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.mangrove_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.mangrove_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mangrove_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.mangrove_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.mangrove_leaves = {
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.mangrove_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.mangrove_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.mangrove_propagule = {
  "hanging": createState(false, ["false", "true"]),
  "propagule_stage": createState(0, [0, 1, 2, 3, 4]),
};
producer.mangrove_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mangrove_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.mangrove_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.mangrove_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.mangrove_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.mangrove_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.material_reducer = {
  "chemistry_table_type": createState("material_reducer", ["compound_creator", "material_reducer", "element_constructor", "lab_table"]),
  "direction": createState(0, [0, 1, 2, 3]),
};
producer.medium_amethyst_bud = {
  "facing_direction": createState(1, [0, 1, 2, 3, 4, 5]),
  "minecraft:block_face": createState("up", ["down", "up", "north", "south", "west", "east"]),
};
producer.melon_stem = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.mossy_cobblestone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("mossy_cobblestone", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mossy_cobblestone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("mossy_cobblestone", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mossy_cobblestone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.mossy_cobblestone_wall = {
  "wall_block_type": createState("mossy_cobblestone", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.mossy_stone_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("mossy_stone_brick", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mossy_stone_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("mossy_stone_brick", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mossy_stone_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.mossy_stone_brick_wall = {
  "wall_block_type": createState("mossy_stone_brick", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.mossy_stone_bricks = {
  "stone_brick_type": createState("mossy", ["default", "mossy", "cracked", "chiseled", "smooth"]),
};
producer.mud_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mud_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.mud_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.mud_brick_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.muddy_mangrove_roots = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.mushroom_stem = {
  "huge_mushroom_bits": createState(15, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.nether_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("nether_brick", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.nether_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("nether_brick", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.nether_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.nether_brick_wall = {
  "wall_block_type": createState("nether_brick", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.nether_wart = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.normal_stone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("stone", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.normal_stone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("stone", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.normal_stone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.oak_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.oak_fence = {
  "wood_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.oak_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.oak_leaves = {
  "old_leaf_type": createState("oak", ["oak", "spruce", "birch", "jungle"]),
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.oak_log = {
  "old_log_type": createState("oak", ["oak", "spruce", "birch", "jungle"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.oak_planks = {
  "wood_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.oak_sapling = {
  "age_bit": createState(false, ["false", "true"]),
  "sapling_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "pale_oak"]),
};
producer.oak_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.oak_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.oak_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(false, ["false", "true"]),
  "wood_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.observer = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "minecraft:facing_direction": createState("down", ["down", "up", "north", "south", "west", "east"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.ochre_froglight = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.orange_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.orange_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.orange_carpet = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_concrete = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_concrete_powder = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.orange_shulker_box = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_stained_glass = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_stained_glass_pane = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_terracotta = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.orange_tulip = {
  "flower_type": createState("tulip_orange", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.orange_wool = {
  "color": createState("orange", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.oxeye_daisy = {
  "flower_type": createState("oxeye", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.oxidized_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.oxidized_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.oxidized_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.oxidized_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.oxidized_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.oxidized_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.pale_hanging_moss = {
  "tip": createState(false, ["false", "true"]),
};
producer.pale_moss_carpet = {
  "pale_moss_carpet_side_east": createState("none", ["none", "short", "tall"]),
  "pale_moss_carpet_side_north": createState("none", ["none", "short", "tall"]),
  "pale_moss_carpet_side_south": createState("none", ["none", "short", "tall"]),
  "pale_moss_carpet_side_west": createState("none", ["none", "short", "tall"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.pale_oak_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.pale_oak_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.pale_oak_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.pale_oak_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.pale_oak_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.pale_oak_leaves = {
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.pale_oak_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.pale_oak_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.pale_oak_sapling = {
  "age_bit": createState(false, ["false", "true"]),
};
producer.pale_oak_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.pale_oak_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.pale_oak_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.pale_oak_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.pale_oak_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.pale_oak_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.pearlescent_froglight = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.peony = {
  "double_plant_type": createState("paeonia", ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.petrified_oak_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("wood", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.petrified_oak_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("wood", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.piglin_head = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.pink_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.pink_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.pink_carpet = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_concrete = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_concrete_powder = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.pink_petals = {
  "direction": createState(0, [0, 1, 2, 3]),
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.pink_shulker_box = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_stained_glass = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_stained_glass_pane = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_terracotta = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.pink_tulip = {
  "flower_type": createState("tulip_pink", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.pink_wool = {
  "color": createState("pink", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.piston = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.piston_arm_collision = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.pitcher_crop = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.pitcher_plant = {
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.player_head = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.pointed_dripstone = {
  "dripstone_thickness": createState("tip", ["tip", "frustum", "middle", "base", "merge"]),
  "hanging": createState(true, ["false", "true"]),
};
producer.polished_andesite = {
  "stone_type": createState("andesite_smooth", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.polished_andesite_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("polished_andesite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_andesite_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("polished_andesite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_andesite_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_basalt = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.polished_blackstone_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_blackstone_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_blackstone_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_blackstone_brick_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.polished_blackstone_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.polished_blackstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_blackstone_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.polished_blackstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_blackstone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_blackstone_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.polished_deepslate_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_deepslate_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_deepslate_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_deepslate_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.polished_diorite = {
  "stone_type": createState("diorite_smooth", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.polished_diorite_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("polished_diorite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_diorite_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("polished_diorite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_diorite_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_granite = {
  "stone_type": createState("granite_smooth", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.polished_granite_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("polished_granite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_granite_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("polished_granite", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.polished_granite_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_tuff_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.polished_tuff_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.polished_tuff_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.polished_tuff_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.poppy = {
  "flower_type": createState("poppy", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.portal = {
  "portal_axis": createState("unknown", ["unknown", "x", "z"]),
};
producer.potatoes = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.powered_comparator = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "output_lit_bit": createState(false, ["false", "true"]),
  "output_subtract_bit": createState(false, ["false", "true"]),
};
producer.powered_repeater = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "repeater_delay": createState(0, [0, 1, 2, 3]),
};
producer.prismarine = {
  "prismarine_block_type": createState("default", ["default", "dark", "bricks"]),
};
producer.prismarine_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("prismarine_brick", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.prismarine_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("prismarine_brick", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.prismarine_bricks = {
  "prismarine_block_type": createState("bricks", ["default", "dark", "bricks"]),
};
producer.prismarine_bricks_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.prismarine_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("prismarine_rough", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.prismarine_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("prismarine_rough", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.prismarine_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.prismarine_wall = {
  "wall_block_type": createState("prismarine", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.pumpkin = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.pumpkin_stem = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.purple_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.purple_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.purple_carpet = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_concrete = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_concrete_powder = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.purple_shulker_box = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_stained_glass = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_stained_glass_pane = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_terracotta = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purple_wool = {
  "color": createState("purple", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.purpur_block = {
  "chisel_type": createState("default", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.purpur_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("purpur", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.purpur_pillar = {
  "chisel_type": createState("lines", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.purpur_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("purpur", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.purpur_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.quartz_block = {
  "chisel_type": createState("default", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.quartz_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("quartz", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.quartz_pillar = {
  "chisel_type": createState("lines", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.quartz_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("quartz", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.quartz_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.rail = {
  "rail_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
};
producer.red_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.red_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.red_carpet = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_concrete = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_concrete_powder = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.red_mushroom_block = {
  "huge_mushroom_bits": createState(14, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.red_nether_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("red_nether_brick", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.red_nether_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("red_nether_brick", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.red_nether_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.red_nether_brick_wall = {
  "wall_block_type": createState("red_nether_brick", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.red_sand = {
  "sand_type": createState("red", ["normal", "red"]),
};
producer.red_sandstone = {
  "sand_stone_type": createState("default", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.red_sandstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("red_sandstone", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.red_sandstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("red_sandstone", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.red_sandstone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.red_sandstone_wall = {
  "wall_block_type": createState("red_sandstone", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.red_shulker_box = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_stained_glass = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_stained_glass_pane = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_terracotta = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.red_tulip = {
  "flower_type": createState("tulip_red", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.red_wool = {
  "color": createState("red", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.redstone_torch = {
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.redstone_wire = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.reeds = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.repeating_command_block = {
  "conditional_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.resin_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.resin_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.resin_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.resin_brick_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.resin_clump = {
  "multi_face_direction_bits": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]),
};
producer.respawn_anchor = {
  "respawn_anchor_charge": createState(0, [0, 1, 2, 3, 4]),
};
producer.rose_bush = {
  "double_plant_type": createState("rose", ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.sand = {
  "sand_type": createState("normal", ["normal", "red"]),
};
producer.sandstone = {
  "sand_stone_type": createState("default", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.sandstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("sandstone", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.sandstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("sandstone", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.sandstone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.sandstone_wall = {
  "wall_block_type": createState("sandstone", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.scaffolding = {
  "stability": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
  "stability_check": createState(false, ["false", "true"]),
};
producer.sculk_catalyst = {
  "bloom": createState(false, ["false", "true"]),
};
producer.sculk_sensor = {
  "powered_bit": createState(false, ["false", "true"]),
  "sculk_sensor_phase": createState(0, [0, 1, 2]),
};
producer.sculk_shrieker = {
  "active": createState(false, ["false", "true"]),
  "can_summon": createState(false, ["false", "true"]),
};
producer.sculk_vein = {
  "multi_face_direction_bits": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]),
};
producer.sea_pickle = {
  "cluster_count": createState(0, [0, 1, 2, 3]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.seagrass = {
  "sea_grass_type": createState("default", ["default", "double_top", "double_bot"]),
};
producer.short_grass = {
  "tall_grass_type": createState("default", ["default", "tall", "fern", "snow"]),
};
producer.silver_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.skeleton_skull = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.small_amethyst_bud = {
  "facing_direction": createState(1, [0, 1, 2, 3, 4, 5]),
  "minecraft:block_face": createState("up", ["down", "up", "north", "south", "west", "east"]),
};
producer.small_dripleaf_block = {
  "direction": createState(3, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("east", ["south", "west", "north", "east"]),
  "upper_block_bit": createState(true, ["false", "true"]),
};
producer.smoker = {
  "facing_direction": createState(3, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.smooth_quartz = {
  "chisel_type": createState("smooth", ["default", "chiseled", "lines", "smooth"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.smooth_quartz_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("smooth_quartz", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_quartz_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_4": createState("smooth_quartz", ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_quartz_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.smooth_red_sandstone = {
  "sand_stone_type": createState("smooth", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.smooth_red_sandstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("smooth_red_sandstone", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_red_sandstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_3": createState("smooth_red_sandstone", ["end_stone_brick", "smooth_red_sandstone", "polished_andesite", "andesite", "diorite", "polished_diorite", "granite", "polished_granite"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_red_sandstone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.smooth_sandstone = {
  "sand_stone_type": createState("smooth", ["default", "heiroglyphs", "cut", "smooth"]),
};
producer.smooth_sandstone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("smooth_sandstone", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_sandstone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type_2": createState("smooth_sandstone", ["red_sandstone", "purpur", "prismarine_rough", "prismarine_dark", "prismarine_brick", "mossy_cobblestone", "smooth_sandstone", "red_nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_sandstone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.smooth_stone_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("smooth_stone", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.smooth_stone_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("smooth_stone", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.sniffer_egg = {
  "cracked_state": createState("no_cracks", ["no_cracks", "cracked", "max_cracked"]),
};
producer.snow_layer = {
  "covered_bit": createState(false, ["false", "true"]),
  "height": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.soul_campfire = {
  "direction": createState(0, [0, 1, 2, 3]),
  "extinguished": createState(false, ["false", "true"]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
};
producer.soul_fire = {
  "age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.soul_lantern = {
  "hanging": createState(false, ["false", "true"]),
};
producer.soul_torch = {
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.sponge = {
  "sponge_type": createState("dry", ["dry", "wet"]),
};
producer.spruce_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.spruce_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.spruce_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.spruce_fence = {
  "wood_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.spruce_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.spruce_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.spruce_leaves = {
  "old_leaf_type": createState("spruce", ["oak", "spruce", "birch", "jungle"]),
  "persistent_bit": createState(false, ["false", "true"]),
  "update_bit": createState(false, ["false", "true"]),
};
producer.spruce_log = {
  "old_log_type": createState("spruce", ["oak", "spruce", "birch", "jungle"]),
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.spruce_planks = {
  "wood_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.spruce_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.spruce_sapling = {
  "age_bit": createState(false, ["false", "true"]),
  "sapling_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "pale_oak"]),
};
producer.spruce_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
  "wood_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.spruce_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.spruce_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.spruce_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.spruce_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.spruce_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(false, ["false", "true"]),
  "wood_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.standing_banner = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.sticky_piston = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.sticky_piston_arm_collision = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.stone = {
  "stone_type": createState("stone", ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"]),
};
producer.stone_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("stone_brick", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.stone_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "stone_slab_type": createState("stone_brick", ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.stone_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.stone_brick_wall = {
  "wall_block_type": createState("stone_brick", ["cobblestone", "mossy_cobblestone", "granite", "diorite", "andesite", "sandstone", "brick", "stone_brick", "mossy_stone_brick", "nether_brick", "end_brick", "prismarine", "red_sandstone", "red_nether_brick"]),
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.stone_bricks = {
  "stone_brick_type": createState("default", ["default", "mossy", "cracked", "chiseled", "smooth"]),
};
producer.stone_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.stone_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.stone_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.stonecutter_block = {
  "facing_direction": createState(2, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("north", ["south", "west", "north", "east"]),
};
producer.stripped_acacia_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_acacia_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(true, ["false", "true"]),
  "wood_type": createState("acacia", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.stripped_bamboo_block = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_birch_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_birch_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(true, ["false", "true"]),
  "wood_type": createState("birch", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.stripped_cherry_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_cherry_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_crimson_hyphae = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_crimson_stem = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_dark_oak_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_dark_oak_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(true, ["false", "true"]),
  "wood_type": createState("dark_oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.stripped_jungle_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_jungle_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(true, ["false", "true"]),
  "wood_type": createState("jungle", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.stripped_mangrove_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_mangrove_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_oak_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_oak_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(true, ["false", "true"]),
  "wood_type": createState("oak", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.stripped_pale_oak_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_pale_oak_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_spruce_log = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_spruce_wood = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
  "stripped_bit": createState(true, ["false", "true"]),
  "wood_type": createState("spruce", ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"]),
};
producer.stripped_warped_hyphae = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.stripped_warped_stem = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.structure_block = {
  "structure_block_type": createState("data", ["data", "save", "load", "corner", "invalid", "export"]),
};
producer.structure_void = {
  "structure_void_type": createState("void", ["void", "air"]),
};
producer.sunflower = {
  "double_plant_type": createState("sunflower", ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.suspicious_gravel = {
  "brushed_progress": createState(0, [0, 1, 2, 3]),
  "hanging": createState(true, ["false", "true"]),
};
producer.suspicious_sand = {
  "brushed_progress": createState(0, [0, 1, 2, 3]),
  "hanging": createState(true, ["false", "true"]),
};
producer.sweet_berry_bush = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.tall_grass = {
  "double_plant_type": createState("grass", ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.tnt = {
  "allow_underwater_bit": createState(false, ["false", "true"]),
  "explode_bit": createState(false, ["false", "true"]),
};
producer.torch = {
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.torchflower_crop = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.trapped_chest = {
  "facing_direction": createState(2, [0, 1, 2, 3, 4, 5]),
  "minecraft:cardinal_direction": createState("north", ["south", "west", "north", "east"]),
};
producer.trial_spawner = {
  "ominous": createState(false, ["false", "true"]),
  "trial_spawner_state": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.trip_wire = {
  "attached_bit": createState(false, ["false", "true"]),
  "disarmed_bit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
  "suspended_bit": createState(false, ["false", "true"]),
};
producer.tripwire_hook = {
  "attached_bit": createState(false, ["false", "true"]),
  "direction": createState(0, [0, 1, 2, 3]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.tube_coral = {
  "coral_color": createState("blue", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.tube_coral_block = {
  "coral_color": createState("blue", ["blue", "pink", "purple", "red", "yellow"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.tube_coral_fan = {
  "coral_color": createState("blue", ["blue", "pink", "purple", "red", "yellow"]),
  "coral_fan_direction": createState(0, [0, 1]),
};
producer.tube_coral_wall_fan = {
  "coral_direction": createState(0, [0, 1, 2, 3]),
  "coral_hang_type_bit": createState(false, ["false", "true"]),
  "dead_bit": createState(false, ["false", "true"]),
};
producer.tuff_brick_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.tuff_brick_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.tuff_brick_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.tuff_brick_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.tuff_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.tuff_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
};
producer.tuff_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.tuff_wall = {
  "wall_connection_type_east": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_north": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_south": createState("none", ["none", "short", "tall"]),
  "wall_connection_type_west": createState("none", ["none", "short", "tall"]),
  "wall_post_bit": createState(false, ["false", "true"]),
};
producer.turtle_egg = {
  "cracked_state": createState("no_cracks", ["no_cracks", "cracked", "max_cracked"]),
  "turtle_egg_count": createState("one_egg", ["one_egg", "two_egg", "three_egg", "four_egg"]),
};
producer.twisting_vines = {
  "twisting_vines_age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
};
producer.underwater_tnt = {
  "allow_underwater_bit": createState(true, ["false", "true"]),
  "explode_bit": createState(false, ["false", "true"]),
};
producer.underwater_torch = {
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.unlit_redstone_torch = {
  "torch_facing_direction": createState("unknown", ["unknown", "west", "east", "north", "south", "top"]),
};
producer.unpowered_comparator = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "output_lit_bit": createState(false, ["false", "true"]),
  "output_subtract_bit": createState(false, ["false", "true"]),
};
producer.unpowered_repeater = {
  "direction": createState(0, [0, 1, 2, 3]),
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "repeater_delay": createState(0, [0, 1, 2, 3]),
};
producer.vault = {
  "minecraft:cardinal_direction": createState("south", ["south", "west", "north", "east"]),
  "ominous": createState(false, ["false", "true"]),
  "vault_state": createState("inactive", ["inactive", "active", "unlocking", "ejecting"]),
};
producer.verdant_froglight = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.vine = {
  "vine_direction_bits": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.wall_banner = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.warped_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.warped_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.warped_double_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.warped_fence_gate = {
  "direction": createState(0, [0, 1, 2, 3]),
  "in_wall_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
};
producer.warped_hanging_sign = {
  "attached_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  "hanging": createState(false, ["false", "true"]),
};
producer.warped_hyphae = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.warped_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.warped_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.warped_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.warped_standing_sign = {
  "ground_sign_direction": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.warped_stem = {
  "pillar_axis": createState("y", ["y", "x", "z"]),
};
producer.warped_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.warped_wall_sign = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.water = {
  "liquid_depth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.waxed_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.waxed_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.waxed_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.waxed_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.waxed_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_exposed_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.waxed_exposed_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.waxed_exposed_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.waxed_exposed_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_exposed_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.waxed_exposed_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_oxidized_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.waxed_oxidized_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.waxed_oxidized_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.waxed_oxidized_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_oxidized_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.waxed_oxidized_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_weathered_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.waxed_weathered_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.waxed_weathered_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.waxed_weathered_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.waxed_weathered_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.waxed_weathered_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.weathered_copper_bulb = {
  "lit": createState(false, ["false", "true"]),
  "powered_bit": createState(false, ["false", "true"]),
};
producer.weathered_copper_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.weathered_copper_trapdoor = {
  "direction": createState(0, [0, 1, 2, 3]),
  "open_bit": createState(false, ["false", "true"]),
  "upside_down_bit": createState(false, ["false", "true"]),
};
producer.weathered_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.weathered_cut_copper_stairs = {
  "upside_down_bit": createState(false, ["false", "true"]),
  "weirdo_direction": createState(0, [0, 1, 2, 3]),
};
producer.weathered_double_cut_copper_slab = {
  "minecraft:vertical_half": createState("bottom", ["bottom", "top"]),
  "top_slot_bit": createState(false, ["false", "true"]),
};
producer.weeping_vines = {
  "weeping_vines_age": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
};
producer.wet_sponge = {
  "sponge_type": createState("wet", ["dry", "wet"]),
};
producer.wheat = {
  "growth": createState(0, [0, 1, 2, 3, 4, 5, 6, 7]),
};
producer.white_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.white_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.white_carpet = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_concrete = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_concrete_powder = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.white_shulker_box = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_stained_glass = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_stained_glass_pane = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_terracotta = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.white_tulip = {
  "flower_type": createState("tulip_white", ["poppy", "orchid", "allium", "houstonia", "tulip_red", "tulip_orange", "tulip_white", "tulip_pink", "oxeye", "cornflower", "lily_of_the_valley"]),
};
producer.white_wool = {
  "color": createState("white", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.wither_skeleton_skull = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.wooden_button = {
  "button_pressed_bit": createState(false, ["false", "true"]),
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.wooden_door = {
  "direction": createState(0, [0, 1, 2, 3]),
  "door_hinge_bit": createState(false, ["false", "true"]),
  "open_bit": createState(false, ["false", "true"]),
  "upper_block_bit": createState(false, ["false", "true"]),
};
producer.wooden_pressure_plate = {
  "redstone_signal": createState(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
};
producer.yellow_candle = {
  "candles": createState(0, [0, 1, 2, 3]),
  "lit": createState(false, ["false", "true"]),
};
producer.yellow_candle_cake = {
  "lit": createState(false, ["false", "true"]),
};
producer.yellow_carpet = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_concrete = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_concrete_powder = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_glazed_terracotta = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};
producer.yellow_shulker_box = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_stained_glass = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_stained_glass_pane = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_terracotta = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.yellow_wool = {
  "color": createState("yellow", ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "silver", "cyan", "purple", "blue", "brown", "green", "red", "black"]),
};
producer.zombie_head = {
  "facing_direction": createState(0, [0, 1, 2, 3, 4, 5]),
};

for (var k in producer)
  Object.freeze(producer[k]);
Object.freeze(producer)