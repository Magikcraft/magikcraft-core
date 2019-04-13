import { BukkitHologramManager } from './holograms-bukkit';
import { NukkitHologramManager } from './holograms-nukkit';
declare class HologramManager {
    implementation: NukkitHologramManager | BukkitHologramManager;
    constructor();
    createHologram({ lines, location }: {
        lines: any;
        location: any;
    }): {
        delete: () => any;
    };
    getHolograms(): any;
}
declare const _default: HologramManager;
export default _default;
