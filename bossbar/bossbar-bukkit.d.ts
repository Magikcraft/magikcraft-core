/// <reference types="@scriptcraft/types" />
import { IBossBar, BossBarStyleIndex, BossBarColorIndex } from './bossbar';
export declare class BukkitBossBar implements IBossBar {
    private bar;
    player: Player;
    static removeAll(): void;
    constructor(player: Player | undefined, namespace: string, key: string);
    color(color: BossBarColorIndex): this;
    style(style: BossBarStyleIndex): this;
    text(msg: string): this;
    progress(progress?: number): this;
    show(): void;
    hide(): void;
    remove(): undefined;
}
