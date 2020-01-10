/// <reference types="@scriptcraft/types" />
import { BukkitServer } from './BukkitServer';
import { NukkitServer } from './NukkitServer';
declare class Server {
    implementation: NukkitServer | BukkitServer;
    constructor();
    getBaseDir(): any;
    getWorlds(): World[];
    getWorldDir(): any;
    executeCommand(command: string): any;
    getPlugin(name: string): any;
    isPluginEnabled(name: string): any;
}
declare const server: Server;
export default server;
//# sourceMappingURL=index.d.ts.map