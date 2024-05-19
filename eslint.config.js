// import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	// ...fixupConfigRules(pluginReactConfig),
	{
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
];
