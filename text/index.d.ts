export declare enum TextColor {
    'AQUA',
    'BLACK',
    'BLUE',
    'BOLD',
    'DARK_AQUA',
    'DARK_BLUE',
    'DARK_GRAY',
    'DARK_GREEN',
    'DARK_PURPLE',
    'DARK_RED',
    'GOLD',
    'GRAY',
    'GREEN',
    'ITALIC',
    'LIGHT_PURPLE',
    'MAGIC',
    'RED',
    'RESET',
    'STRIKETHROUGH',
    'UNDERLINE',
    'WHITE',
    'YELLOW'
}
export declare const TextComponent: any;
export declare const ComponentBuilderClass: any;
export declare const ComponentBuilder: (msg: string) => IComponentBuilder;
interface IComponentBuilder {
    (text: string): IComponentBuilder;
    append(msg: string): IComponentBuilder;
    bold(bold: boolean): IComponentBuilder;
    color(color: TextColor): IComponentBuilder;
    create(): any;
    italic(italic: boolean): IComponentBuilder;
    strikethrough(strikethrough: boolean): IComponentBuilder;
    underlined(underlined: boolean): IComponentBuilder;
}
export {};
