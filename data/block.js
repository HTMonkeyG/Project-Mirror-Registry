const NBT = require("parsenbt-js")
  , blockStates = require("./blockStates.js");

class BlockLegacy {
  constructor(name) {
    this.name = name;
    // 1 << 24 | 2 << 16
    this.version = 18087936;
    this.states = blockStates.getBlockState(this.name)
  }
}

module.exports = BlockLegacy;