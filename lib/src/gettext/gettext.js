"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return a localiser.
 * This can load locale strings, and transform a given source string to the correct locale
 * @param locale
 */
exports.localiser = function (locale) {
    if (locale === void 0) { locale = 'en'; }
    var _strings = {};
    var _locale = locale;
    var setLocale = function (locale) { return _locale = locale; };
    var gettext = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return getlocalisedtext.apply(void 0, __spreadArrays([_locale, msg], args));
    };
    function getlocalisedtext(locale, msg) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (locale === 'en') {
            return interpolate.apply(void 0, __spreadArrays([msg], args));
        }
        var localisedStrings = _strings[locale];
        // Use a localised message if we have one, otherwise return the original string
        var stringFromLocale = function (msgid) { return localisedStrings && localisedStrings[msgid] ? localisedStrings[msgid] : msgid; };
        var localisedString = stringFromLocale(msg);
        // Replace all %s occurrences with the args
        return interpolate.apply(void 0, __spreadArrays([localisedString], args));
    }
    ;
    /**
     * Loads in the strings for a locale
     *
     * @param {string} locale - the ISO code for the locale
     * @param {IlocaleString[]} strings - the strings to load in. Produced by po2json.
     */
    function loadLocale(strings, locale) {
        if (!locale || typeof locale !== 'string') {
            throw new Error('No locale specified!');
        }
        if (!_strings[locale]) {
            _strings[locale] = {};
        }
        for (var id in strings) {
            if (id !== '') {
                if (strings[id] && strings[id].length > 0) {
                    _strings[locale][id] = strings[id][1];
                }
            }
        }
        // strings.forEach(str  => _strings[locale][str.msgid] = str.msgstr);
    }
    return {
        gettext: gettext,
        getlocalisedtext: getlocalisedtext,
        setLocale: setLocale,
        loadLocale: loadLocale
    };
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
function interpolate(_msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var splitStr = _msg.split('%s');
    // ghetto pad to make sure we have enough args to interpolate
    splitStr.forEach(function () { return args.push[' ']; });
    // interpolate!
    return splitStr.reduce(function (previous, current, index) { return "" + previous + args[index - 1] + current; });
}
exports.interpolate = interpolate;
