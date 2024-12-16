const NBT = require("parsenbt-js");

function createLevelMeta() {
  var result = NBT.create(true), a;

  result["str>BiomeOverride"] = "";
  result["i8>CenterMapsToOrigin"] = 0;
  result["i8>ConfirmedPlatformLockedContent"] = 0;
  result["i32>Difficulty"] = 1;
  result["str>FlatWorldLayers"] = "{\"biome_id\":1,\"block_layers\":[{\"block_name\":\"minecraft:bedrock\",\"count\":1},{\"block_name\":\"minecraft:dirt\",\"count\":2},{\"block_name\":\"minecraft:grass\",\"count\":1}],\"encoding_version\":6,\"structure_options\":null,\"world_version\":\"version.post_1_18\"}\n",
  result["i8>ForceGameType"] = 0;
  result["i32>GameType"] = 1;
  result["i32>Generator"] = 2;
  result["str>InventoryVersion"] = "1.20.10";
  result["i8>LANBroadcast"] = 1;
  result["i8>LANBroadcastIntent"] = 1;
  result["i64>LastPlayed"] = 0n;
  result["str>LevelName"] = "";
  result["i32>LimitedWorldOriginX"] = 0;
  result["i32>LimitedWorldOriginY"] = 0;
  result["i32>LimitedWorldOriginZ"] = 0;
  result["list>MinimumCompatibleClientVersion"] = [
    "i32",
    1,
    20,
    10,
    0,
    0
  ];
  result["i8>MultiplayerGame"] = 1;
  result["i8>MultiplayerGameIntent"] = 1;
  result["i32>NetherScale"] = 8;
  result["i32>NetworkVersion"] = 594;
  result["i32>Platform"] = 2;
  result["i32>PlatformBroadcastIntent"] = 3;
  result["i64>RandomSeed"] = 0n;
  result["i8>SpawnV1Villagers"] = 0;
  result["i32>SpawnX"] = 0;
  result["i32>SpawnY"] = 32767;
  result["i32>SpawnZ"] = 0;
  result["i32>StorageVersion"] = 10;
  result["i64>Time"] = 0n;
  result["i32>WorldVersion"] = 1;
  result["i32>XBLBroadcastIntent"] = 3;
  result["comp>abilities"] = a = NBT.create(true);

  a["i8>attackmobs"] = 0;
  a["i8>attackplayers"] = 0;
  a["i8>build"] = 1;
  a["i8>doorsandswitches"] = 0;
  a["f32>flySpeed"] = 0.05000000074505806;
  a["i8>flying"] = 0;
  a["i8>instabuild"] = 0;
  a["i8>invulnerable"] = 0;
  a["i8>lightning"] = 0;
  a["i8>mayfly"] = 0;
  a["i8>mine"] = 1;
  a["i8>op"] = 0;
  a["i8>opencontainers"] = 0;
  a["i8>teleport"] = 0;
  a["f32>walkSpeed"] = 0.10000000149011612;

  result["i8>bonusChestEnabled"] = 0;
  result["i8>bonusChestSpawned"] = 0;
  result["i8>cheatsEnabled"] = 0;
  result["i8>commandblockoutput"] = 1;
  result["i8>commandblocksenabled"] = 1;
  result["i8>commandsEnabled"] = 1;
  result["i64>currentTick"] = 0n;
  result["i32>daylightCycle"] = 0;
  result["i8>dodaylightcycle"] = 1;
  result["i8>doentitydrops"] = 1;
  result["i8>dofiretick"] = 1;
  result["i8>doimmediaterespawn"] = 0;
  result["i8>doinsomnia"] = 1;
  result["i8>domobloot"] = 1;
  result["i8>domobspawning"] = 1;
  result["i8>dotiledrops"] = 1;
  result["i8>doweathercycle"] = 1;
  result["i8>drowningdamage"] = 1;
  result["i32>eduOffer"] = 0;
  result["i8>educationFeaturesEnabled"] = 0;
  result["comp>experiments"] = a = NBT.create(true);

  a["i8>experiments_ever_used"] = 0;
  a["i8>saved_with_toggled_experiments"] = 0;

  result["i8>falldamage"] = 1;
  result["i8>firedamage"] = 1;
  result["i8>freezedamage"] = 1;
  result["i32>functioncommandlimit"] = 10000;
  result["i8>hasBeenLoadedInCreative"] = 1;
  result["i8>hasLockedBehaviorPack"] = 0;
  result["i8>hasLockedResourcePack"] = 0;
  result["i8>immutableWorld"] = 0;
  result["i8>isCreatedInEditor"] = 0;
  result["i8>isExportedFromEditor"] = 0;
  result["i8>isFromLockedTemplate"] = 0;
  result["i8>isFromWorldTemplate"] = 0;
  result["i8>isRandomSeedAllowed"] = 0;
  result["i8>isSingleUseWorld"] = 0;
  result["i8>isWorldTemplateOptionLocked"] = 0;
  result["i8>keepinventory"] = 0;
  result["list>lastOpenedWithVersion"] = [
    "i32",
    1,
    20,
    11,
    0,
    0
  ];
  result["f32>lightningLevel"] = 0;
  result["i32>lightningTime"] = 0;
  result["i32>limitedWorldDepth"] = 16;
  result["i32>limitedWorldWidth"] = 16;
  result["i32>maxcommandchainlength"] = 65535;
  result["i8>mobgriefing"] = 1;
  result["i8>naturalregeneration"] = 1;
  result["i8>neteaseEncryptFlag"] = 0;
  result["list>neteaseStrongholdSelectedChunks"] = [
    "null"
  ];
  result["i32>permissionsLevel"] = 0;
  result["i32>playerPermissionsLevel"] = 1;
  result["str>prid"] = "";
  result["i8>pvp"] = 1;
  result["f32>rainLevel"] = 1;
  result["i32>rainTime"] = 0;
  result["i32>randomtickspeed"] = 1;
  result["i8>requiresCopiedPackRemovalCheck"] = 0;
  result["i8>respawnblocksexplode"] = 1;
  result["i8>sendcommandfeedback"] = 1;
  result["i32>serverChunkTickRange"] = 4;
  result["i8>showbordereffect"] = 1;
  result["i8>showcoordinates"] = 0;
  result["i8>showdeathmessages"] = 1;
  result["i8>showtags"] = 1;
  result["i8>spawnMobs"] = 0;
  result["i32>spawnradius"] = 5;
  result["i8>startWithMapEnabled"] = 0;
  result["i8>texturePacksRequired"] = 0;
  result["i8>tntexplodes"] = 1;
  result["i8>useMsaGamertagsOnly"] = 0;
  result["i64>worldStartCount"] = 0n;
  result["comp>world_policies"] = NBT.create(true);

  return result
}

exports.createLevelMeta = createLevelMeta;