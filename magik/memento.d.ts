export declare function getItem<T = any>(key?: string): T | undefined;
export declare function _setItem<T>(key: string, value: T): T;
export declare const memento: typeof _setItem;
