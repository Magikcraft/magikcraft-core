export interface IBossBar {
    render(): any;
    color(color: BossBarColor): any;
    style(style: BossBarStyle): any;
    text(msg: string): any;
    progress(progress: number): any;
    removeAllBars(): any;
    remove(): any;
}
export declare enum BossBarColor {
    'BLUE',
    'GREEN',
    'PINK',
    'PURPLE',
    'RED',
    'WHITE',
    'YELLOW'
}
export declare enum BossBarStyle {
    'NOTCHED_10',
    'NOTCHED_12',
    'NOTCHED_20'
}
