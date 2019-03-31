declare class Server {
    constructor();
    executeCommand: (command: any) => any;
    getPlugin: (pluginName: any) => any;
    getWorldDir: () => any;
    isPluginEnabled: (name: any) => any;
    getWorlds: () => any[];
}
declare const ServerInterface: Server;
export default ServerInterface;
