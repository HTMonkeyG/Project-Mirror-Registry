/**
 * Change the type of the command block NBT.
 * @param {Object} blockEntity - NBT data.
 * @param {Number} type - Type of the command block.
 * @returns {Object}
 */
function setType(blockEntity, type) {
  if (blockEntity["str>CustomName"] != "CommandBlock")
    return false;

  blockEntity["i32>LPCommandMode"] = type;

  return blockEntity
}

/**
 * Set the conditional mode of the command block NBT.
 * @param {Object} blockEntity - NBT data.
 * @param {Boolean} conditionalMode - Condition mode.
 * @returns {Object}
 */
function setConditionMode(blockEntity, conditionalMode) {
  if (blockEntity["str>CustomName"] != "CommandBlock")
    return false;

  conditionalMode = !!conditionalMode;

  blockEntity["i8>conditionMet"] = blockEntity["i8>LPCondionalMode"] = blockEntity["i8>conditionalMode"] = conditionalMode;

  return blockEntity
}

/**
 * Set the redstone mode of the command block NBT.
 * @param {Object} blockEntity - NBT data.
 * @param {Boolean} redstoneMode - Redstone mode.
 * @returns {Object}
 */
function setRedstoneMode(blockEntity, redstoneMode) {
  if (!blockEntity["str>CustomName"] != "CommandBlock")
    return false;

  redstoneMode = !!redstoneMode;

  blockEntity["i8>auto"] = !redstoneMode;
  blockEntity["i8>LPRedstoneMode"] = redstoneMode;

  return blockEntity
}

/**
 * Set the delay of the command block NBT.
 * @param {Object} blockEntity - NBT data.
 * @param {Number} delay - Delay in ticks.
 * @returns {Object}
 */
function setDelay(blockEntity, delay) {
  if (!blockEntity["i32>TickDelay"])
    return false;

  blockEntity["i32>TickDelay"] = delay >> 0;

  return blockEntity
}

/**
 * Set the command of the command block NBT.
 * @param {Object} blockEntity - NBT data.
 * @param {String} command - Command.
 * @returns {Object}
 */
function setCommand(blockEntity, command) {
  if (!blockEntity["str>Command"])
    return false;

  blockEntity["str>Command"] = command + '';

  return blockEntity
}

module.exports = {
  setType: setType,
  setConditionMode: setConditionMode,
  setRedstoneMode: setRedstoneMode,
  setDelay: setDelay,
  setCommand: setCommand
};