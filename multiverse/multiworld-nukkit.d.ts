export declare class NukkitWorldManager {
    multiworldPlugin: any;
    server: any;
    constructor();
    getWorldPath(worldName: string): string;
    getMVWorld(worldName: string): any;
    cloneWorld(worldName: string, templateWorldName: string): Promise<{} | undefined>;
    importWorld(worldName: string): Promise<void>;
    unloadWorld(worldName: string): void;
    destroyWorld(worldName: string): Promise<{}>;
}
