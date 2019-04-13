"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convert_1 = require("../utils/convert");
var NukkitHologramManager = /** @class */ (function () {
    function NukkitHologramManager() {
        this.plugin = __plugin.server.nukkit
            .getPluginManager()
            .getPlugin('Holograms');
    }
    NukkitHologramManager.prototype.createHologram = function (_a) {
        var lines = _a.lines, location = _a.location;
        var CompoundTag = Java.type('cn.nukkit.nbt.tag.CompoundTag');
        var ListTag = Java.type('cn.nukkit.nbt.tag.ListTag');
        var FloatTag = Java.type('cn.nukkit.nbt.tag.FloatTag');
        var DoubleTag = Java.type('cn.nukkit.nbt.tag.DoubleTag');
        var Hologram = Java.type('gt.creeperface.holograms.Hologram');
        var HologramEntity = Java.type('gt.creeperface.holograms.entity.HologramEntity');
        var PokkitLocation = Java.type('nl.rutgerkok.pokkit.PokkitLocation');
        var UUID = Java.type('java.util.UUID');
        var ArrayList = Java.type('java.util.ArrayList');
        var plugin = this.plugin;
        var hologramId = UUID.randomUUID().toString();
        var nbt = new CompoundTag()
            .putList(new ListTag('Pos')
            .add(new DoubleTag('0', location.x))
            .add(new DoubleTag('1', location.y))
            .add(new DoubleTag('2', location.z)))
            .putList(new ListTag('Motion')
            .add(new DoubleTag('0', 0))
            .add(new DoubleTag('1', 0))
            .add(new DoubleTag('2', 0)))
            .putList(new ListTag('Rotation')
            .add(new FloatTag('0', location.getYaw()))
            .add(new FloatTag('1', location.getPitch())))
            .putString('hologramId', hologramId);
        var translations = new ArrayList();
        var englishText = new ArrayList();
        translations.add(englishText);
        lines.map(function (line) {
            englishText.add(line);
        });
        var hologram = new Hologram(hologramId, translations);
        hologram.setUpdateInterval(-1);
        plugin.getInternalHolograms().putIfAbsent(hologramId, hologram);
        var entity = new HologramEntity(PokkitLocation.toNukkit(location).chunk, nbt);
        entity.spawnToAll();
        plugin.update(hologramId, translations);
        return {
            delete: function () {
                return Java.from(plugin
                    .getServer()
                    .getLevels()
                    .values()).map(function (level) {
                    return Java.from(level.getEntities()).map(function (entity) {
                        if (entity instanceof HologramEntity) {
                            if (entity.getHologramId().equals(hologramId)) {
                                entity.close();
                                entity.despawnFromAll();
                                plugin.getInternalHolograms().remove(hologramId);
                            }
                        }
                    });
                });
            },
        };
    };
    NukkitHologramManager.prototype.getHolograms = function () {
        return convert_1.HashMapToJSObject(this.plugin.getInternalHolograms());
    };
    return NukkitHologramManager;
}());
exports.NukkitHologramManager = NukkitHologramManager;
