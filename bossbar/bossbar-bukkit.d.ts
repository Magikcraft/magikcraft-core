/// <reference types="@scriptcraft/types" />
import { IBossBar } from './bossbar';
export declare const TextComponent: any;
export declare type TextComponent = any;
export declare const ComponentBuilder: (msg: string) => IComponentBuilder;
export declare const bar: (msg?: string | undefined, player?: any) => Bar;
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
    constructor(msg?: string, player?: any);
    render(): this;
    color(theColor: color): this;
    style(theStyle: style): this;
    textComponent(msg: TextComponent): this;
    text(msg: string): this;
    progress(progress?: number): this;
    removeAllBars: () => any;
    show(): void;
    hide(): void;
    remove(): undefined;
}
