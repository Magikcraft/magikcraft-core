/// <reference types="@scriptcraft/types" />
export interface IBossBar {
    render(): any;
    color(theColor: color): any;
    style(theStyle: style): any;
    text(msg: string): any;
    progress(progress: number): any;
    removeAllBars(): any;
    remove(): any;
}
export declare enum ChatColor {
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
export declare const color: {
    BLUE: any;
    GREEN: any;
    PINK: any;
    PURPLE: any;
    RED: any;
    WHITE: any;
    YELLOW: any;
};
export declare const style: {
    NOTCHED_10: any;
    NOTCHED_12: any;
    NOTCHED_20: any;
};
