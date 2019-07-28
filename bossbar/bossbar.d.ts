export interface IBossBar {
    color(color: BossBarColor): IBossBar;
    style(style: BossBarStyle): any;
    text(msg: string): any;
    progress(progress: number): any;
    removeAllBars(): any;
    remove(): any;
}
export declare type BossBarColor = 'BLUE' | 'GREEN' | 'PINK' | 'PURPLE' | 'RED' | 'WHITE';
export declare type BossBarStyle = 'NOTCHED_10' | 'NOTCHED_12' | 'NOTCHED_20';
