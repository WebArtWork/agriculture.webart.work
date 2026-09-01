export const environment = {
	roles: [],
	production: true,
	appId: 'agriculture',
	url: 'https://it.webart.work',
	contact: {
		slug: 'agriculture.webart.work',
	},
	sign: {
		logo: '',
		email: '',
		password: '',
	},
	image: {
		default: 'https://agriculture.webart.work/logo.png',
		logo: 'https://agriculture.webart.work/logo.png',
	},
	defaultLanguageCode: 'ua',
	/** Ukrainian first, English second, then the rest by European speaker population (descending) \u2014 matches devkit's translator list order. */
	languages: [
		{
			code: 'ua',
			name: 'Ukrainian',
			nativeName: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
		},
		{ code: 'en', name: 'English', nativeName: 'English' },
		{ code: 'de', name: 'German', nativeName: 'Deutsch' },
		{ code: 'fr', name: 'French', nativeName: 'Fran\u00e7ais' },
		{ code: 'it', name: 'Italian', nativeName: 'Italiano' },
		{ code: 'es', name: 'Spanish', nativeName: 'Espa\u00f1ol' },
		{ code: 'pl', name: 'Polish', nativeName: 'Polski' },
		{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
		{ code: 'ro', name: 'Romanian', nativeName: 'Rom\u00e2n\u0103' },
		{ code: 'cs', name: 'Czech', nativeName: '\u010ce\u0161tina' },
		{ code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
		{ code: 'el', name: 'Greek', nativeName: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac' },
		{ code: 'pt', name: 'Portuguese', nativeName: 'Portugu\u00eas' },
		{ code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
	],
};
