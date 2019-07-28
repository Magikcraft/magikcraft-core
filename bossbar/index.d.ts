/// <reference types="@scriptcraft/types" />
import { IBossBar, BossBarColor, BossBarStyle } from './bossbar';
export declare class BossBar implements IBossBar {
    static Color: {
        [index: string]: BossBarColor;
    };
    static Style: {
        [index: string]: BossBarStyle;
    };
    private BossBarImpl;
    constructor(player: Player);
    color(color: BossBarColor): IBossBar;
    style(style: BossBarStyle): any;
    text(msg: string): any;
    progress(progress: number): any;
    removeAllBars(): any;
    remove(): any;
}
