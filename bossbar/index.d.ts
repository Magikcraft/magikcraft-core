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
    render(): void;
    color(color: BossBarColor): void;
    style(style: BossBarStyle): void;
    text(msg: string): void;
    progress(progress: number): void;
    removeAllBars(): void;
    remove(): void;
}
