// This allows magikcraft spells to emit messages in the user's language
import { localiser } from './gettext'

// @TODO: load language files here using:
// localiser.loadLocale(strings, lang)

const locale =
	typeof self == 'undefined' ? 'en' : self.spigot().getLocale() || 'en'

var lang = locale.substr(0, 2)
export const gettext = localiser(lang).gettext
