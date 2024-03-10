import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";

 
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".svx"]
		}),
	],
    kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
        },
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$stores: './src/stores',
			$styles: './src/styles',
			$utils: './src/utils',
			$paraglide: './src/paraglide',
			$msgs: 'src/paraglide/messages.js'
		},
    }
};
 
export default config;