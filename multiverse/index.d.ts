import { NukkitWorldManager } from './multiworld-nukkit';
import { BukkitWorldManager } from './multiverse-bukkit';
declare class WorldManager {
    implementation: NukkitWorldManager | BukkitWorldManager;
    constructor();
    getMVWorld(worldName: string): any;
    getWorldPath(worldName: string): string;
    importWorld(worldName: string): Promise<any>;
    destroyWorld(worldName: string): Promise<{}>;
    unloadWorld(worldName: string): boolean | void;
}
declare const _default: WorldManager;
export default _default;
