const NBT = require("parsenbt-js");

function createMap(id) {
  var result = NBT.create(true);

  result["a8>colors"] = new Int8Array(65536);
  result["i8>dimension"] = 0;
  result["i8>fullyExplored"] = 0;
  result["i8>mapLocked"] = 0;
  result["i16>width"] = map["i16>height"] = 128;
  result["i8>scale"] = 0;
  result["i32>xCenter"] = map["i32>zCenter"] = 0;
  result["i64>parentMapId"] = 0n;
  result["i64>mapId"] = id;
  result["list>decorations"] = ["comp"];
  result["i8>unlimitedTracking"] = 0;

  return result
}

module.exports = createMap;