const blockEntities = require("./data/blockEntities.js")
  , universalTags = require("./data/universalTags.js")
  , items = require("./data/items.js");

exports.createBlockEntity = blockEntities.createBlockEntity;
exports.createUniversalTag = universalTags.createUniversalTag;
exports.createItemTag = items.createItemTag;
exports.createItemStack = items.createItemStack;