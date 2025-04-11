import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src") },
			{ find: "@app", replacement: path.resolve(__dirname, "src/app") },
			{ find: "@components", replacement: path.resolve(__dirname, "src/app/components") },
			{ find: "@context", replacement: path.resolve(__dirname, "src/app/context") },
			{ find: "@layout", replacement: path.resolve(__dirname, "src/app/layout") },
			{ find: "@pages", replacement: path.resolve(__dirname, "src/app/pages") },
			{ find: "@routes", replacement: path.resolve(__dirname, "src/app/routes") },
			{ find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
			{ find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
		],
	},
	server: {
		port: 5000,
		host: "0.0.0.0",
	},
});
