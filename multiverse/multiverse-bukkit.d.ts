/// <reference types="@scriptcraft/types" />
export declare class BukkitWorldManager {
    multiversePlugin: MultiverseCorePlugin;
    worldmanager: WorldManager;
    q: {
        queueOperation(fn: () => void): Promise<{}>;
    };
    constructor();
    getWorldPath(worldName: string): string;
    worldExistsOnDisk(worldName: string): any;
    destroyWorld(worldName: string): Promise<{}>;
    importWorld(worldName: string): Promise<any>;
    cloneWorld(worldName: string, templateWorldName: string): Promise<{} | undefined>;
    getMVWorld(name: string): any;
    unloadWorld(name: string): boolean;
}
interface MultiverseCorePlugin {
    cloneWorld(templateWorldName: string, worldName: string, mode: 'normal'): BukkitWorld;
    getMVWorldManager(): WorldManager;
}
interface WorldManager {
    deleteWorld(worldName: string, removeFromConfig: boolean, deleteWorldFolder: boolean): any;
    getMVWorld(name: string): BukkitWorld | null;
    unloadWorld(name: string, unloadBukkit: boolean): boolean;
}
export {};
