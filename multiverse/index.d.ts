/// <reference types="@scriptcraft/types" />
import { NukkitWorldManager } from './multiworld-nukkit';
import { BukkitWorldManager } from './multiverse-bukkit';
declare class WorldManager {
    implementation: NukkitWorldManager | BukkitWorldManager;
    constructor();
    getMVWorld(worldName: string): any;
    getWorldPath(worldName: string): string;
    importWorld(worldName: string): Promise<void> | Promise<World>;
    importAdventureWorld(worldName: string): Promise<void> | Promise<World>;
    destroyWorld(worldName: string): Promise<unknown>;
    unloadWorld(worldName: string): boolean | void;
}
declare const _default: WorldManager;
export default _default;
