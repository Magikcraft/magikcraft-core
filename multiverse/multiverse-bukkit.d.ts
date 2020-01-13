/// <reference types="@scriptcraft/types" />
export declare class BukkitWorldManager {
    multiversePlugin: MultiverseCorePlugin;
    MVWorldManager: MVWorldManager;
    worldListeners: {
        [worldName: string]: any;
    };
    q: {
        queueOperation(fn: () => void): Promise<unknown>;
    };
    constructor();
    getWorldPath(worldName: string): string;
    worldExistsOnDisk(worldName: string): boolean;
    destroyWorld(worldName: string): Promise<unknown>;
    reloadAdventureWorld(worldName: string): Promise<World>;
    importAdventureWorld(worldName: string): Promise<World>;
    importWorld(worldName: string): Promise<World>;
    cloneWorld(worldName: string, templateWorldName: string): Promise<World>;
    getMVWorld(name: string): World | null;
    unloadWorld(name: string): boolean;
}
interface MultiverseCorePlugin {
    cloneWorld(templateWorldName: string, worldName: string, mode: 'normal'): World;
    getMVWorldManager(): MVWorldManager;
}
interface MVWorldManager {
    deleteWorld(worldName: string, removeFromConfig: boolean, deleteWorldFolder: boolean): any;
    getMVWorld(name: string): World | null;
    unloadWorld(name: string, unloadBukkit: boolean): boolean;
}
export {};
