/// <reference types="@scriptcraft/types" />
/**
 * Return a localiser.
 * This can load locale strings, and transform a given source string to the correct locale
 * @param locale
 */
export declare const localiser: (locale?: string) => ILocaliser;
/**
 *
 * Interpolate arguments to replace occurrences of %s
 * Will interpolate an empty string for missing arguments
 *
 * So: interpolate('Player %s was %s by %s', 'sitapati', 'killed', 'a dragon')
 * returns: 'Player sitapati was killed by a dragon'
 *
 *
 * @export
 * @param {string} _msg
 * @param {...any[]} args
 * @returns
 */
export declare function interpolate(_msg: string, ...args: (number | string)[]): string;
export interface ILocaliser {
    setLocale(locale: string): string;
    gettext(msg: string, ...args: msgarg[]): string;
    getlocalisedtext(locale: string, msg: string, ...args: (number | string)[]): string;
    loadLocale(strings: ILocaleStrings, locale: string): void;
}
//# sourceMappingURL=gettext.d.ts.map