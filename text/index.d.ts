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
/**
 *
 * new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true )
 * .append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create();
 */
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
