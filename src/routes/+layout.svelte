<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import '../app.pcss';
</script>

<ParaglideJS {i18n}>
	<div class="layout">
		<!-- Header -->
		<Header></Header>

		<main>
			<!-- Black hole for other content -->
			<slot />
		</main>

		<!-- Footer -->
		<Footer></Footer>
	</div>
</ParaglideJS>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
