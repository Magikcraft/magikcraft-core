declare const Server: {
    executeCommand: (command: any) => any;
    getPlugin: (pluginName: any) => any;
    getWorldDir: () => any;
    isPluginEnabled: (name: any) => any;
    getWorlds: () => any[];
};
export default Server;
