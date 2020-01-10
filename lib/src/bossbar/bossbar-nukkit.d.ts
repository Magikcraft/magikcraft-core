/// <reference types="@scriptcraft/types" />
import { IBossBar } from './bossbar';
export declare class NukkitBossBar implements IBossBar {
    private static BossBar;
    private bar;
    private id;
    private player;
    constructor(player: Player);
    render(): this;
    color(color: any): this;
    style(): this;
    text(title: string): this;
    progress(percentage: number): this;
    remove(): this;
    removeAllBars(): void;
}
//# sourceMappingURL=bossbar-nukkit.d.ts.map