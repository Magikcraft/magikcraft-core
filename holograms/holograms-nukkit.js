"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        var UUID = Java.type('java.util.UUID');
        var ArrayList = Java.type('java.util.ArrayList');
        var plugin = this.plugin;
        var HologramPlus = Java.extend(Hologram, {
            delete: function () {
                plugin.getHolograms();
            },
        });
        var hologramId = UUID.randomUUID();
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
        var pages = new ArrayList();
        var text = new ArrayList();
        pages.add(text);
        lines.map(function (line) {
            text.add(line);
        });
        var hologram = new Hologram(hologramId, pages);
        hologram.setUpdateInterval();
        this.plugin.getInternalHolograms().putIfAbsent(hologramId, hologram);
        return hologram;
    };
    NukkitHologramManager.prototype.getHolograms = function () {
        return this.plugin.getInternalHolograms();
    };
    return NukkitHologramManager;
}());
exports.NukkitHologramManager = NukkitHologramManager;
