/// <reference types="@scriptcraft/types" />

export declare function actionbar(playername: string, text: string, color: TextColor): void;

declare function aspecto(): Location | null;

export declare class BossBar implements IBossBar {
    static Color: typeof BossBarColorIndex;
    static Style: typeof BossBarStyleIndex;
    private BossBarImpl;
    constructor(player: Player, namespace: string, key: string);
    color(color: BossBarColorIndex): IBossBar;
    style(style: BossBarStyleIndex): any;
    text(msg: string): any;
    progress(progress: number): any;
    remove(): any;
    static removeAll(): any;
}

declare enum BossBarColorIndex {
    BLUE = "BLUE",
    GREEN = "GREEN",
    PINK = "PINK",
    PURPLE = "PURPLE",
    RED = "RED",
    WHITE = "WHITE",
    YELLOW = "YELLOW"
}

declare enum BossBarStyleIndex {
    NOTCHED_10 = "SEGMENTED_10",
    NOTCHED_12 = "SEGMENTED_12",
    NOTCHED_20 = "SEGMENTED_20",
    NOTCHED_6 = "SEGMENTED_6"
}

declare class BukkitHologramManager {
    API: any;
    constructor();
    /**
     * Creates a hologram at given location.
     *
     * @param lines an array of lines of text
     * @param location the location where it will appear
     * @return the new hologram created
     */
    createHologram({ lines, location, }: {
        lines: string[];
        location: Location;
    }): Hologram;
    /**
     * Finds all the holograms created by the plugin.
     *
     * @return the holograms created the plugin. the Collection is a copy
     * and modifying it has no effect on the holograms.
     */
    getHolograms(): Hologram[];
    /**
     * Registers a new placeholder that can be used in holograms created with commands.
     * With this method, you can basically expand the core of HolographicDisplays.
     *
     * @param plugin the owner plugin of the placeholder
     * @param textPlaceholder the text that the placeholder will be associated to (e.g.: "{onlinePlayers}")
     * @param refreshRate the refresh rate of the placeholder, in seconds. Keep in mind that the minimum is 0.1 seconds, and that will be rounded to tenths of seconds
     * @param replacer the implementation that will return the text to replace the placeholder, where the update() method is called every <b>refreshRate</b> seconds
     * @return true if the registration was successfull, false if it was already registered
     */
    registerPlaceholder(textPlaceholder: string, refreshRate: number, replacer: {
        update: () => string;
    }): void;
    /**
     * Finds all the placeholders registered by this plugin.
     *
     * @return a collection of placeholders registered by this plugin
     */
    getRegisteredPlaceholders(): string[];
    /**
     * Unregister a placeholder created by a plugin.
     *
     * @param textPlaceholder the placeholder to remove
     * @return true if found and removed, false otherwise
     */
    unregisterPlaceholder(textPlaceholder: string): boolean;
    /**
     * Resets and removes all the placeholders registered by a plugin. This is useful
     * when you have configurable placeholders and you want to remove all of them.
     *
     * @param plugin the plugin that owns the placeholders
     */
    unregisterPlaceholders(): void;
    /**
     * Checks if an entity is part of a hologram.
     *
     * @param bukkitEntity the entity to check
     * @return true if the entity is a part of a hologram
     */
    isHologramEntity(bukkitEntity: any): boolean;
}

declare class BukkitServer {
    server: any;
    isBukkit: boolean;
    isNukkit: boolean;
    constructor();
    executeCommand(command: any): any;
    getPlugin(pluginName: any): any;
    getBaseDir(): string;
    getWorldDir(): any;
    isPluginEnabled(name: string): any;
    getWorlds(): World[];
}

declare class BukkitWorldManager {
    multiversePlugin: MultiverseCorePlugin;
    worldmanager: WorldManager_2;
    q: {
        queueOperation(fn: () => void): Promise<unknown>;
    };
    constructor();
    getWorldPath(worldName: string): string;
    worldExistsOnDisk(worldName: string): boolean;
    destroyWorld(worldName: string): Promise<unknown>;
    importWorld(worldName: string): Promise<any>;
    cloneWorld(worldName: string, templateWorldName: string): Promise<unknown>;
    getMVWorld(name: string): World | null;
    unloadWorld(name: string): boolean;
}

declare function celeritate(speed?: number): void;

export declare const commando: any;

declare function declaro(itemToDeclare: any): void;

declare class DelayedExecutable {
    private iterations;
    private fn;
    private delay;
    constructor(opts: any);
    now: (done?: TaskCallback | undefined) => void;
    private execute;
}

declare function dixit(msg: string | any, playerName?: string): void;

declare class Doable {
    private iterations;
    constructor(iterations: number);
    times: (fn: () => void) => Schedulable;
}

declare function doNTimes(action: any, nTimes?: number, delay?: number, callback?: any): void;

/**
 * Return a DurableMap - a disk-backed memory that survives JS engine refresh
 * @param name a unique name
 */
declare function DurableMap(name: any): any;

export declare const environment: {
    DISABLE_WATCH_RELOAD: boolean;
    plugins: {
        Pokkit: Plugin;
        Scriptcraft: Plugin;
        ScriptcraftMultiEngine: Plugin;
    };
    HEALTHCHECKS_IO_URL: string | null;
    HAS_HOLOGRAM_BUKKIT: boolean;
    NUKKIT_HOLOGRAM_TYPE: string;
    HAS_HOLOGRAM_NUKKIT: boolean;
    HAS_HOLOGRAM: boolean;
    HAS_BOSSBAR_NUKKIT: boolean;
    HAS_BOSSBAR_BUKKIT: boolean;
    HAS_BOSSBAR: boolean;
    NUKKIT_BOSSBAR_TYPE: string;
    BUKKIT_BOSSBAR_TYPE: string;
    IS_SCRIPTCRAFT: boolean;
    IS_BUKKIT: boolean;
    IS_NUKKIT: boolean;
};

declare function exmemento(key?: string): any;

declare function exsultus(power?: number | string): void;

export declare const fs: {
    copyDir(srcPath: string, destPath: string): Promise<unknown>;
    readDir(path: any): string[];
    /**
     * exists
     * @param {string} filename - path to file, relative to Minecraft server root
     * @return {boolean}
     *
     * Checks if file or directory exists.
     */
    exists(filename: any): boolean;
    /**
     * readFile
     * @param {string} filename - path to file, relative to Minecraft server root
     * @return {string}
     *
     * Reads the contents of a file from the filesystem.
     */
    readFile(filename: any): string;
    /**
     * remove
     * @param {string} filename - path to file, relative to Minecraft server root
     * @return {boolean}
     *
     * Delete file or directory (recursive).
     */
    remove(filename: any): void;
    /**
     * writeFile
     * @param {string} filename - path to file, relative to Minecraft server root
     * @param {string} content - file content to write
     * @return {void}
     *
     * Writes the contents of a file to the filesystem.
     */
    writeFile(filename: string, content: string): void;
    readJson(path: string, options?: {
        throwException: boolean;
    }): any;
    writeJSON(path: string, json: object): void;
};

declare function getSender(): Player | null;

declare interface Hologram {
    /**
     * Appends a text line to end of this hologram.
     *
     * @param text the content of the line, can be null for an empty line
     * @return the new TextLine appended
     */
    appendTextLine(text: string): TextLine;
    /**
     * Appends an item line to end of this hologram.
     *
     * @param itemStack the content of the line
     * @return the new ItemLine appended
     */
    appendItemLine(itemStack: ItemStack): ItemLine;
    /**
     * Inserts a text line in this hologram.
     *
     * @param index the line is inserted before this index. If 0, the new line will
     * be inserted before the first line.
     * @param text the content of the line, can be null for an empty line
     * @return the new TextLine inserted
     * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
     */
    insertTextLine(index: number, text: string): TextLine;
    /**
     * Inserts an item line in this hologram.
     *
     * @param index the line is inserted before this index. If 0, the new line will
     * be inserted before the first line.
     * @param itemStack the content of the line
     * @return the new ItemLine inserted
     * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
     */
    insertItemLine(index: number, itemStack: ItemStack): ItemLine;
    /**
     * Finds the element at a given index in the lines.
     *
     * @param index the index of the line to retrieve.
     * @return the hologram line at the given index, can be an {@link ItemLine} or a {@link TextLine}.
     * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
     */
    getLine(index: number): HologramLine;
    /**
     * Removes a line at a given index. Since: v2.0.1
     *
     * @param index the index of the line, that should be between 0 and size() - 1.
     * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
     */
    removeLine(index: number): void;
    /**
     * Removes all the lines from this hologram.
     */
    clearLines(): void;
    /**
     * Checks the amount of lines of the hologram.
     *
     * @return the amount of lines
     */
    size(): number;
    /**
     * The physical height of the hologram, counting all the lines. Since: v2.1.4
     *
     * @return the height of the hologram, counting all the lines and the gaps between them
     */
    getHeight(): number;
    /**
     * Teleports a hologram to the given location.
     *
     * @param location the new location
     */
    teleport(location: Location): void;
    /**
     * Teleports a hologram to the given location.
     *
     * @param world the world where the hologram should be teleported,
     * use {@link #getWorld()} to teleport it in the same world.
     * @param x the X coordinate
     * @param y the Y coordinate
     * @param z the Z coordinate
     */
    teleport(world: World, x: number, y: number, z: number): void;
    /**
     * Returns the position of the hologram.
     *
     * @return the Location of the hologram
     */
    getLocation(): Location;
    /**
     * Returns the X coordinate.
     *
     * @return the X coordinate of the hologram
     */
    getX(): number;
    /**
     * Returns the Y coordinate.
     *
     * @return the Y coordinate of the hologram
     */
    getY(): number;
    /**
     * Returns the Z coordinate.
     *
     * @return the Z coordinate of the hologram
     */
    getZ(): number;
    /**
     * Returns the world.
     *
     * @return the world of the hologram
     */
    getWorld(): World;
    /**
     * Returns the {@link VisibilityManager} of this hologram.
     * <br><b style = "color: red">Note</b>: the usage of the VisibilityManager requires ProtocolLib.
     * Without the plugin, holograms will be always visible.
     *
     * @return the VisibilityManager of this hologram
     */
    getVisibilityManager(): VisibilityManager;
    /**
     * Returns when the hologram was created. Useful for removing old holograms.
     *
     * @return the timestamp of when the hologram was created, in milliseconds
     */
    getCreationTimestamp(): number;
    /**
     * Checks if the hologram will track and replace placeholders.
     * This is false by default.
     *
     * @return if the hologram allows placeholders
     */
    isAllowPlaceholders(): boolean;
    /**
     * Sets if the hologram should track and replace placeholders.
     * By default if will not track them.
     *
     * @param allowPlaceholders if the hologram should track placeholders
     */
    setAllowPlaceholders(allowPlaceholders: boolean): void;
    /**
     * Deletes this hologram. Editing or teleporting the hologram when deleted
     * will throw an exception. Lines will be automatically cleared.
     * You should remove all the references of the hologram after deletion.
     */
    delete(): void;
    /**
     * Checks if a hologram was deleted.
     *
     * @return true if this hologram was deleted
     */
    isDeleted(): boolean;
    refreshAll(): void;
}

/**
 * Interface to represent a line in a Hologram.
 */
declare interface HologramLine {
    /**
     * Returns the parent Hologram of this line.
     *
     * @return the parent Hologram.
     */
    getParent: () => Hologram;
    /**
     * Removes this line from the parent Hologram. Since: v2.0.1
     * Do not call if the Hologram has been deleted, an exception will be thrown.
     */
    emoveLine: () => void;
}

declare class HologramManager {
    implementation: NukkitHologramManager | BukkitHologramManager;
    constructor();
    createHologram({ lines, location }: {
        lines: any;
        location: any;
    }): {
        delete: () => any;
    };
    getHolograms(): any;
}

export declare const holograms: HologramManager;

declare function iacta(playerName: any): void;

declare function ianuae(location: any): void;

declare interface IBossBar {
    color(color: BossBarColorIndex): IBossBar;
    style(style: BossBarStyleIndex): any;
    text(msg: string): any;
    progress(progress: number): any;
    remove(): any;
}

declare function icePath(): void;

declare function incendium(playerName: any, duration: any): void;

declare function infierno(quantity?: number): void;

declare type ItemLine = any;

declare type ItemStack = any;

declare function locationFromJSON(maybeLocation?: any): Location | null;

declare function locationToJSON(location: any): {
    Pitch: any;
    World: any;
    X: any;
    Y: any;
    Yaw: any;
    Z: any;
    type: string;
} | undefined;

/**
 * This function returns a namespaced log function.
 * The log function takes one argument and an optional second argument.
 *
 * @example
 *
 * import Logger from '@magikcraft/log'
 * const log = Logger('my_module')
 * log('A message')
 * log('Players:', players)
 *
 * @param namespace
 */
export declare const log: (namespace: string) => (msg: string, toLog?: any) => void;

export declare const magik: {
    aspecto: typeof aspecto;
    celeritate: typeof celeritate;
    clearInterval: (handle: number) => void;
    clearTimeout: (handle: number) => void;
    declaro: typeof declaro;
    dixit: typeof dixit;
    do: (iterations?: number) => Doable;
    doNTimes: typeof doNTimes;
    DurableMap: typeof DurableMap;
    exsultus: typeof exsultus;
    exmemento: typeof exmemento;
    fromJSON: typeof locationFromJSON;
    getPlayer: (player: any) => Player | null;
    getPlugin: () => Plugin;
    getSender: typeof getSender;
    hic: () => Location;
    iacta: typeof iacta;
    ianuae: typeof ianuae;
    icePath: typeof icePath;
    incendium: typeof incendium;
    infierno: typeof infierno;
    memento: typeof import("./memento")._setItem;
    noxvida: typeof noxvida;
    random: (min?: number, max?: number) => number;
    satio: typeof satio;
    setInterval: (callbackFn: any, delay: any) => number;
    setTimeout: (callbackFn: any, delay: any) => number;
    shakti: typeof shakti;
    spectris: typeof spectris;
    stella: typeof stella;
    toJSON: typeof locationToJSON;
    type: (name: any) => any;
    viburnum: typeof viburnum;
    volare: typeof volare;
};

export declare const multiverse: WorldManager;

declare interface MultiverseCorePlugin {
    cloneWorld(templateWorldName: string, worldName: string, mode: 'normal'): World;
    getMVWorldManager(): WorldManager_2;
}

declare function noxvida(duration: any): void;

declare class NukkitHologramManager {
    plugin: any;
    constructor();
    createHologram({ lines, location }: {
        lines: any;
        location: any;
    }): {
        delete: () => any;
    };
    getHolograms(): any;
}

declare class NukkitServer {
    isBukkit: boolean;
    isNukkit: boolean;
    nukkit: any;
    server: any;
    constructor();
    executeCommand(command: any): any;
    getPlugin(pluginName: any): any;
    getBaseDir(): any;
    getWorldDir(): string;
    isPluginEnabled(name: string): boolean;
    getWorlds(): World[];
}

declare class NukkitWorldManager {
    multiworldPlugin: any;
    server: any;
    constructor();
    getWorldPath(worldName: string): string;
    getMVWorld(worldName: string): any;
    cloneWorld(worldName: string, templateWorldName: string): Promise<unknown>;
    importWorld(worldName: string): Promise<void>;
    unloadWorld(worldName: string): void;
    destroyWorld(worldName: string): Promise<unknown>;
}

declare function satio(): void;

declare class Schedulable {
    private iterations;
    private fn;
    constructor(opts: any);
    now(done?: TaskCallback): void;
    withDelay(delay: number): DelayedExecutable;
}

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

export declare const server: Server;

declare function shakti(loc: any): void;

declare function spectris(): void;

declare function stella(location: any): void;

declare type TaskCallback = (iterations?: number) => void;

export declare enum TextColor {
    'AQUA',
    'BLACK',
    'BLUE',
    'BOLD',
    'DARK_AQUA',
    'DARK_BLUE',
    'DARK_GRAY',
    'DARK_GREEN',
    'DARK_PURPLE',
    'DARK_RED',
    'GOLD',
    'GRAY',
    'GREEN',
    'ITALIC',
    'LIGHT_PURPLE',
    'MAGIC',
    'RED',
    'RESET',
    'STRIKETHROUGH',
    'UNDERLINE',
    'WHITE',
    'YELLOW'
}

declare interface TextLine {
    getText(): string;
    setText(line: string): any;
}

export declare const utils: {
    convert: {
        HashMapToJSObject: (hm: any) => any;
        sizeOf: (object: any) => number;
    };
    reflection: {
        getMethods(object: any): any[];
        getMethodsDetailed(object: any): any;
        getFieldsDetailed(object: any): any;
        getFields(object: any): any[];
        getType(thing: any): any;
    };
};

declare function viburnum(amount?: number, delay?: number): void;

/**
 * This object is used to manage the visibility of a hologram.
 * It allows to hide/show the hologram to certain players, and the default behaviour
 * (when a hologram is not specifically being hidden/shown to a player) can be customized.
 */
declare interface VisibilityManager {
    /**
     * Returns if the hologram is visible by default. If not changed, this value
     * is true by default so the hologram is visible to everyone.
     *
     * @return if the hologram hologram is visible by default
     */
    isVisibleByDefault(): boolean;
    /**
     * Sets if the hologram is visible by default. If not changed, this value
     * is true by default so the hologram is visible to everyone.
     *
     * @param visibleByDefault the new behaviour
     */
    setVisibleByDefault(visibleByDefault: boolean): void;
    /**
     * Shows the hologram to a player, overriding the value of {@link #isVisibleByDefault()}.
     * This is persistent if the players goes offline.
     *
     * @param player the involved player
     */
    showTo(player: Player): void;
    /**
     * Hides the hologram to a player, overriding the value of {@link #isVisibleByDefault()}.
     * This is persistent if the players goes offline.
     *
     * @param player the involved player
     */
    hideTo(player: Player): void;
    /**
     * Checks if a hologram is visible to a player.
     *
     * @param player the involved player
     * @return if the player can see the hologram
     */
    isVisibleTo(player: Player): boolean;
    /**
     * Resets the visibility to the default value. If you previously called {@link #showTo(Player)}
     * or {@link #hideTo(Player)} to override the default visibility, this method will reset it
     * to reflect the value of {@link #isVisibleByDefault()}.
     *
     * @param player the involved player
     */
    resetVisibility(player: Player): void;
    /**
     * Resets the visibility for all the players. See {@link #resetVisibility(Player)} for more details.
     */
    resetVisibilityAll(): void;
}

declare function volare(duration: any): void;

declare class WorldManager {
    implementation: NukkitWorldManager | BukkitWorldManager;
    constructor();
    getMVWorld(worldName: string): any;
    getWorldPath(worldName: string): string;
    importWorld(worldName: string): Promise<any>;
    destroyWorld(worldName: string): Promise<unknown>;
    unloadWorld(worldName: string): boolean | void;
}

declare interface WorldManager_2 {
    deleteWorld(worldName: string, removeFromConfig: boolean, deleteWorldFolder: boolean): any;
    getMVWorld(name: string): World | null;
    unloadWorld(name: string, unloadBukkit: boolean): boolean;
}

export { }
