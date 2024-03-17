import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";
const base = process.env.NODE_ENV === 'production' ? '' : ''
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extends: "svelte-kit/tsconfig.json",
	extensions: [".svelte", ".svx"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".svx"]
		}),
	],
    kit: {
		adapter: adapter({
			fallback: `${base}/404.html`
		}),
		alias: {
			$app: './src',
			$components: './src/components',
			lib: './src/lib',
			$stores: './src/stores',
			$styles: './src/styles',
			$utils: './src/utils',
			$paraglide: './src/paraglide',
			$msgs: 'src/paraglide/messages.js'
		},
    }
};
 
export default config;