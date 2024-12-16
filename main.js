const blockEntities = require("./data/blockEntities.js")
  , universalTags = require("./data/universalTags.js")
  , items = require("./data/items.js")
  , levelMeta = require("./data/level.js");

module.exports = {
  createBlockEntity: blockEntities.createBlockEntity,
  createUniversalTag: universalTags.createUniversalTag,
  createItemTag: items.createItemTag,
  createItemStack: items.createItemStack,
  createLevelMeta: levelMeta.createLevelMeta,
  createMap: require("./data/map.js"),
  operations: {
    commandBlock: require("./operation/commandBlock.js"),
    item: require("./operation/item.js")
  }
}
