/// <reference types="@scriptcraft/types" />
import { BossBarColor, IBossBar, BossBarStyle } from './bossbar';
export declare type TextComponent = any;
export declare const bar: (msg?: string | undefined, player?: Player | undefined) => Bar;
export declare class Bar implements IBossBar {
    private bar;
    private barColor;
    private barStyle;
    private init;
    private msg;
    private barProgress;
    private barTextComponent;
    private hasTextComponent;
    private player;
    constructor(msg?: string, player?: Player);
    render(): this;
    color(theColor: BossBarColor): this;
    style(theStyle: BossBarStyle): this;
    textComponent(msg: TextComponent): this;
    text(msg: string): this;
    progress(progress?: number): this;
    removeAllBars: () => any;
    show(): void;
    hide(): void;
    remove(): undefined;
}
