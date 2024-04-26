/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			colors: {
				black: '#333',
				primary: {
					DEFAULT: '#2CB696',
					dark: '#008990'
				}
			},
			fontFamily: {
				noto: ['Arial', 'Noto Sans JP', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
};
