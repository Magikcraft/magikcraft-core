/// <reference types="@scriptcraft/types" />
export declare class BukkitWorldManager {
    multiversePlugin: MultiverseCorePlugin;
    worldmanager: WorldManager;
    q: {
        queueOperation(fn: () => void): Promise<unknown>;
    };
    constructor();
    getWorldPath(worldName: string): string;
    worldExistsOnDisk(worldName: string): boolean;
    destroyWorld(worldName: string): Promise<{}>;
    importWorld(worldName: string): Promise<any>;
    cloneWorld(worldName: string, templateWorldName: string): Promise<{} | undefined>;
    getMVWorld(name: string): World | null;
    unloadWorld(name: string): boolean;
}
interface MultiverseCorePlugin {
    cloneWorld(templateWorldName: string, worldName: string, mode: 'normal'): World;
    getMVWorldManager(): WorldManager;
}
interface WorldManager {
    deleteWorld(worldName: string, removeFromConfig: boolean, deleteWorldFolder: boolean): any;
    getMVWorld(name: string): World | null;
    unloadWorld(name: string, unloadBukkit: boolean): boolean;
}
export {};
