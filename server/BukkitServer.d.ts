/// <reference types="@scriptcraft/types" />
export declare class BukkitServer {
    server: any;
    isBukkit: boolean;
    isNukkit: boolean;
    constructor();
    executeCommand(command: any): any;
    getPlugin(pluginName: any): any;
    getBaseDir(): any;
    getWorldDir(): any;
    isPluginEnabled(name: string): any;
    getWorlds(): World[];
}
