/** @type {import('tailwindcss').Config} */
const Nth = require('tailwind-nth-child')
const nth3n =  new  Nth('3n','3n+0')


module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			blue2: "#66c1f2",
			blue: "rgb(44,240,210)",
			pink: "#ff49db",
			orange2: "rgb(255,196,157)",
			orange: "#ff7849",
			green: "#13ce66",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
			white: "#fff"
		},
		extend: {
			dropShadow: {
				orangeShadow: "0 35px 35px rgb(255,196,157)",
				blueShadow: "0 35px 35px rgb(44,240,210)",
			},
		},
	},
	plugins: [nth3n.nthChild()],
};
