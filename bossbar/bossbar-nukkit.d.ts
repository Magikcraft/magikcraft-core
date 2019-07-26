/// <reference types="@scriptcraft/types" />
import { IBossBar } from './bossbar';
export declare const bar: (msg: string | undefined, player: BukkitPlayer) => NukkitBossBar;
export declare class NukkitBossBar implements IBossBar {
    private static BossBar;
    private bar;
    private id;
    private player;
    constructor(msg: string, player: BukkitPlayer);
    render(): this;
    color(color: any): this;
    style(): this;
    text(title: string): this;
    progress(percentage: number): this;
    remove(): this;
    removeAllBars(): void;
}
