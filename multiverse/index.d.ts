export declare const multiverse: {
    worldExistsOnDisk(worldName: string): any;
    destroyWorld(worldName: string): Promise<{}>;
    importWorld(worldName: string): Promise<any>;
    cloneWorld(worldName: string, templateWorldName: string): Promise<{} | undefined>;
    getMVWorld(name: string): any;
    unloadWorld(name: string): boolean;
    getWorldPath(worldName: string): string;
};
