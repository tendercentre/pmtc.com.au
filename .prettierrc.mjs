// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	// Plugins
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-astro',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	// Options
	printWidth: 100,
	singleQuote: true,
	useTabs: true,
	// Sort imports
	importOrder: ['<THIRD_PARTY_MODULES>', '', '^~/(.*)$', '', '^[./]'],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
	// Overrides
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
