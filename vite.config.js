import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";


const { mergeConfig } = require( 'vite' );

// https://vitejs.dev/config/
export default defineConfig( {
	plugins: [ vue(), svgLoader() ],
	resolve: {
		alias: {
			'@': fileURLToPath( new URL( './src', import.meta.url ) )
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import "@/assets/css/_easing.scss";
				@import "@/assets/css/_variables.scss";
				@import "@/assets/css/_functions.scss";
				`
			}
		}
	},
} )
