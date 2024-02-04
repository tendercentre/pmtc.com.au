import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { type PluginAPI } from 'tailwindcss/types/config';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				yellow: {
					50: '#faf8f1',
					100: '#f9f4dc',
					200: '#f4e8ad',
					300: '#edd56e',
					400: '#e1b430',
					500: '#d49014',
					600: '#b96b0c',
					700: '#915010',
					800: '#6f3e16',
					900: '#573216',
				},
				blue: {
					50: '#f6fafb',
					100: '#ebf7f8',
					200: '#d2ebf0',
					300: '#afd9e7',
					400: '#73b9d9',
					500: '#3f93c5',
					600: '#2d6ea6',
					700: '#295682',
					800: '#23425f',
					900: '#1d354a',
				},
			},
			fontFamily: {
				display: ['var(--oswald)', ...defaultTheme.fontFamily.sans],
				sans: ['var(--roboto)', ...defaultTheme.fontFamily.sans],
			},
			typography: (theme: PluginAPI['theme']) => ({
				DEFAULT: {
					css: {
						thead: {
							borderBottomWidth: '0px',
						},
						'th p:first-child': {
							margin: '0px',
						},
						'td p:first-child': {
							color: theme('colors.gray.500'),
							margin: '0px',
						},
					},
				},
			}),
		},
	},
	plugins: [
		/** @see https://github.com/tailwindlabs/tailwindcss-typography#readme */
		typographyPlugin,

		/** @see https://github.com/tailwindlabs/tailwindcss-forms#readme */
		formsPlugin({
			strategy: 'base',
		}),
	],
} satisfies Config;
