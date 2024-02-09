import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			"main-color": "#163F2C",
			"secondary-color": "#F5F5F7",
			"t1-color": "rgba(22, 63, 44, 0.67)",
			"t2-color": "#647E71",
			"t3-color": "#547163",
			"t4-color": "#416152",
			"t5-color": "#2F5443",
			"t6-color": "#173F2E",
			"landing-btn-color": "#D1E6DD",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
