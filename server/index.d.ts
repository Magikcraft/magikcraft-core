/// <reference types="@scriptcraft/types" />
import { BukkitServer } from './BukkitServer';
import { NukkitServer } from './NukkitServer';
declare class Server {
    implementation: NukkitServer | BukkitServer;
    constructor();
    getBaseDir(): any;
    getWorlds(): BukkitWorld[];
    getWorldDir(): any;
    executeCommand(command: string): any;
    getPlugin(name: string): any;
    isPluginEnabled(name: string): any;
}
declare const _default: Server;
export default _default;
