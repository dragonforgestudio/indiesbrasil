import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit"
import * as runtime from "../paraglide/runtime.js"

export const i18n = createI18n(runtime, {
	"/about" : {
		"pt-br": "/sobre",
		en: "/about"
	},
})