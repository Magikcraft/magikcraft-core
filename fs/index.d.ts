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
