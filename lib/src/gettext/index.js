"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This allows magikcraft spells to emit messages in the user's language
var gettext_1 = require("./gettext");
// @TODO: load language files here using:
// localiser.loadLocale(strings, lang)
var locale = typeof self == 'undefined' ? 'en' : self.spigot().getLocale() || 'en';
var lang = locale.substr(0, 2);
exports.gettext = gettext_1.localiser(lang).gettext;
