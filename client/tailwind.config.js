/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			boxShadow: {
				custom: "0 5px 15px rgba(0, 0, 0, 0.1)",
				"custom-md": "0 8px 30px rgba(0, 0, 0, 0.12)",
				"custom-lg": "0 10px 50px rgba(0, 0, 0, 0.15)",
			},
			animation: {
				"pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"pulse-border": "pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"tab-indicator": "tabIndicatorAppear 0.3s ease forwards",
				"bounce-in": "bounceIn 0.5s ease-out",
				"scale-in": "scaleIn 0.2s ease-out",
			},
			keyframes: {
				"pulse-border": {
					"0%, 100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.5)" },
					"50%": { boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.5)" },
				},
				tabIndicatorAppear: {
					"0%": { width: "0%", opacity: 0 },
					"100%": { width: "50%", opacity: 1 },
				},
				bounceIn: {
					"0%": { transform: "scale(0.8)", opacity: 0 },
					"70%": { transform: "scale(1.05)", opacity: 1 },
					"100%": { transform: "scale(1)", opacity: 1 },
				},
				scaleIn: {
					"0%": { transform: "scale(0.95)", opacity: 0.7 },
					"100%": { transform: "scale(1)", opacity: 1 },
				},
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
				},
			},
		},
	},
	plugins: [],
};
