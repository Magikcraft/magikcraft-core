import { NukkitWorldManager } from './multiworld-nukkit';
import { BukkitWorldManager } from './multiverse-bukkit';
declare class WorldManager {
    implementation: NukkitWorldManager | BukkitWorldManager;
    constructor();
    getMVWorld(worldName: string): any;
    getWorldPath(worldName: string): string;
    importWorld(worldName: string): Promise<any>;
    destroyWorld(worldName: string): Promise<unknown>;
    unloadWorld(worldName: string): boolean | void;
}
declare const Multiverse: WorldManager;
export default Multiverse;
//# sourceMappingURL=index.d.ts.map