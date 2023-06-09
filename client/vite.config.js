import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: "camelCase"
		}
	},
	resolve: {
		alias: {
			"@http": path.resolve(__dirname, "./src/http.js")
		}
	}
});
