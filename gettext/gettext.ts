/**
 * Return a localiser.
 * This can load locale strings, and transform a given source string to the correct locale
 * @param locale
 */
export const localiser = (locale = 'en'): ILocaliser => {

	const _strings: ILocaleObject = {};
	let _locale = locale;

	const setLocale = (locale: string) => _locale = locale;
	const gettext = (msg: string, ...args: (number | string)[]) => getlocalisedtext(_locale, msg, ...args);

	function getlocalisedtext (locale: string, msg: string, ...args: (number | string)[]) {
		if (locale === 'en') {
			return interpolate(msg, ...args);
		}
		const localisedStrings = _strings[locale];
		// Use a localised message if we have one, otherwise return the original string
		const stringFromLocale = (msgid: string) => localisedStrings && localisedStrings[msgid] ? localisedStrings[msgid]: msgid;
		const localisedString = stringFromLocale(msg);
		// Replace all %s occurrences with the args
		return interpolate(localisedString, ...args);
	};

	/**
	 * Loads in the strings for a locale
	 *
	 * @param {string} locale - the ISO code for the locale
	 * @param {IlocaleString[]} strings - the strings to load in. Produced by po2json.
	 */
	function loadLocale(strings: ILocaleStrings, locale: string) {
		if (!locale || typeof locale !== 'string') {
			throw new Error('No locale specified!');
		}
		if (!_strings[locale]) {
			_strings[locale] = {};
		}
		for (let id in strings) {
			if (id !== '') {
				if (strings[id] && strings[id].length > 0) {
					_strings[locale][id] = <string>strings[id][1];
				}
			}
		}
		// strings.forEach(str  => _strings[locale][str.msgid] = str.msgstr);
	}

	return {
		gettext,
		getlocalisedtext,
		setLocale,
		loadLocale
	}
};

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
// Export for testing
export function interpolate(_msg: string, ...args: (number | string)[]) {
    const splitStr = _msg.split('%s');
    // ghetto pad to make sure we have enough args to interpolate
    splitStr.forEach(()=> (args as any).push[' ']);
    // interpolate!
    return splitStr.reduce((previous, current, index) => `${previous}${args[index - 1]}${current}`);
}


interface IStrings {
    [key: string]: string;
}
interface ILocaleObject {
    [key: string]: IStrings;
}

export interface ILocaliser {
    setLocale(locale: string): string;
    gettext(msg: string, ...args: msgarg[]): string;
    getlocalisedtext(locale: string, msg: string, ...args: (number | string)[]): string;
    loadLocale(strings: ILocaleStrings, locale: string): void;
}
