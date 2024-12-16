# Project Mirror Registry
A NodeJS package produces template data of MCBE NBT. It can produce initial NBT data of blocks, block entitie and entities.

This package based on MCBE 1.20.

## Install
```shell
npm i project-mirror-registry
```

## Usage
```js
const PMR = require("project-mirror-registry")
  , NBT = require("parsenbt-js");

// Returns a ParseNBT.js object with proxy
var a = PMR.createBlockEntity("command_block");
a["str>Command"] = "say Hello Minecraft!";
// Then you can put the NBT data into anywhere supports ParseNBT.js object
```

## API
See [api.md]().