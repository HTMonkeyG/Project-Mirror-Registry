const slot = {
  mainhand: "slot.weapon.mainhand",
  offhand: "slot.weapon.offhand",
  head: "slot.armor.head",
  chest: "slot.armor.chest",
  legs: "slot.armor.legs",
  feet: "slot.armor.feet",
  enderchest: "slot.enderchest",
  hotbar: "slot.hotbar",
  inventory: "slot.inventory",
  container: "slot.container"
};

/**
 * Replace item in specified slot and returns the old item if successed.
 * @param {"entity"|"container"} type - Type of the target.
 * @param {Object} target - NBT to be modified.
 * @param {String} slot - Type of the slot.
 * @param {Number} id - Specifies the inventory slot to be modified. 
 * @param {Object} itemStack - Item to be placed.
 * @param {"destroy"|"keep"} [oldItemHandling] - How to handle the old item. 
 * @returns {Boolean|Object} Return false if failed, or the old item.
 */
function replaceItem(type, target, slot, id, itemStack, oldItemHandling) {
  function a(b, c) {
    if (!target[b] || (target[b][c] && oldItemHandling == "keep"))
      return false;
    else {
      var old = target[b][c];
      target[b][c] = itemStack;
      return old
    }
  }

  if (type == "entity") {
    switch (slot) {
      case "slot.weapon.mainhand":
        return a("list>Mainhand", 1);
      case "slot.weapon.offhand":
        return a("list>Offhand", 1);
      case "slot.armor.head":
        return a("list>Armor", 1);
      case "slot.armor.chest":
        return a("list>Armor", 2);
      case "slot.armor.legs":
        return a("list>Armor", 3);
      case "slot.armor.feet":
        return a("list>Armor", 4);
      case "slot.enderchest":
        return a("list>EnderChestInventory", id + 1);
      case "slot.hotbar":
        return a("list>PlayerUIItems", id + 1);
      case "slot.inventory":
        return a("list>Inventory", id + 1);
      default:
        return false
    }
  } else if (type == "container") {
    if (slot != "slot.container")
      return false
    return a("list>Items", id + 1);
  } else
    return false
}

module.exports = {
  replaceItem: replaceItem,
  slot: slot
}