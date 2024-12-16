declare namespace PMR {
  /**
   * Create a block entity template with given block id.
   * @param {String} type - Type of the block.
   * @returns {Object|null}
   */
  export function createBlockEntity(type: string): object;
  /**
   * Create a template universal tag with specified name.
   * @param {String} type - The name of a universal tag.
   * @param {...any} args - Arguments.
   * @returns 
   */
  export function createUniversalTag(type: string, ...args): object;
  /**
   * Create a item with given id.
   * @param {String} type - Identifier of item.
   * @returns {Object|null}
   */
  export function createItemTag(type: string): object | null;
  /**
   * Create a stack of item with given id.
   * @param {String} type - Identifier of item .
   * @param {Number|undefined} count - Count of item.
   * @returns {Object|null}
   */
  export function createItemStack(type: string, count: number | undefined): object | null;
  /**
   * Creates an empty level.dat template.
   * @returns {Object}
   */
  export function createLevelMeta(): object;
  /**
   * Create map data in database.
   * @param {BigInt} id - Map UID.
   * @returns {Object}
   */
  export function createMap(id: bigint): object;

  /** Built in operation functions. */
  const operations: {
    /** Operation to command blocks. */
    commandBlock: {
      /**
       * Change the type of the command block NBT.
       * @param {Object} blockEntity - NBT data.
       * @param {Number} type - Type of the command block.
       * @returns {Object}
       */
      setType: (blockEntity: object, type: number) => object;
      /**
       * Set the conditional mode of the command block NBT.
       * @param {Object} blockEntity - NBT data.
       * @param {Boolean} conditionalMode - Condition mode.
       * @returns {Object}
       */
      setConditionMode: (blockEntity: object, conditionalMode: boolean) => object;
      /**
       * Set the redstone mode of the command block NBT.
       * @param {Object} blockEntity - NBT data.
       * @param {Boolean} redstoneMode - Redstone mode.
       * @returns {Object}
       */
      setRedstoneMode: (blockEntity: object, redstoneMode: boolean) => object;
      /**
       * Set the delay of the command block NBT.
       * @param {Object} blockEntity - NBT data.
       * @param {Number} delay - Delay in ticks.
       * @returns {Object}
       */
      setDelay: (blockEntity: object, delay: number) => object;
      /**
       * Set the command of the command block NBT.
       * @param {Object} blockEntity - NBT data.
       * @param {String} command - Command.
       * @returns {Object}
       */
      setCommand: (blockEntity: object, command: string) => object;
    }
  };
}
export = PMR