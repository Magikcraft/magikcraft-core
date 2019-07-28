export interface IBossBar {
    color(color: BossBarColorIndex): IBossBar;
    style(style: BossBarStyleIndex): any;
    text(msg: string): any;
    progress(progress: number): any;
    remove(): any;
}
export declare function staticImplements<T>(): <U extends T>(constructor: U) => void;
export declare enum BossBarColorIndex {
    BLUE = "BLUE",
    GREEN = "GREEN",
    PINK = "PINK",
    PURPLE = "PURPLE",
    RED = "RED",
    WHITE = "WHITE",
    YELLOW = "YELLOW"
}
export declare enum BossBarStyleIndex {
    NOTCHED_10 = "SEGMENTED_10",
    NOTCHED_12 = "SEGMENTED_12",
    NOTCHED_20 = "SEGMENTED_20",
    NOTCHED_6 = "SEGMENTED_6"
}
