/// <reference types="@scriptcraft/types" />
import { IBossBar, BossBarStyle, BossBarColor } from './bossbar';
export declare class BukkitBossBar implements IBossBar {
    private bar;
    private barColor;
    private barStyle;
    private init;
    private msg;
    private barProgress;
    private barTextComponent;
    private hasTextComponent;
    private player;
    BossBarStyle: {
        NOTCHED_10: any;
        NOTCHED_12: any;
        NOTCHED_20: any;
    };
    BossBarColor: {
        BLUE: any;
        GREEN: any;
        PINK: any;
        PURPLE: any;
        RED: any;
        WHITE: any;
        YELLOW: any;
    };
    constructor(player: Player | undefined, namespace: string, key: string);
    color(color: BossBarColor): this;
    style(style: BossBarStyle): this;
    text(msg: string): this;
    progress(progress?: number): this;
    removeAllBars: () => any;
    show(): void;
    hide(): void;
    remove(): undefined;
}
