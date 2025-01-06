import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				nero: '#171717',
				matteBlack: '#232323',
				orangedRed: '#ff4500',
				lime: '#00FF00',
				rebeccaPurple: '#663399',
				mediumPurple: '#9370DB',
				lavender: '#E6E6FA',
				ghostWhite: '#F8F8FF',
				gold: '#FFD700',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				alumniSansPinstripe: ['Alumni Sans Pinstripe', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
