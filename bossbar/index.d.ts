/// <reference types="@scriptcraft/types" />
import { IBossBar, BossBarColorIndex, BossBarStyleIndex } from './bossbar';
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
