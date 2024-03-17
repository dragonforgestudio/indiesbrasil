<script lang="ts">
	import * as config from '$lib/config'
	import * as m from '$msgs';
	import { page } from '$stores';
	import { availableLanguageTags, languageTag } from "../paraglide/runtime.js"
	import { i18n } from '$lib/i18n.js'
</script>


<nav>
  <!-- Title -->
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

  <!-- Navigation -->
	<ul class="links">
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">{m.home()}</a>
		</li>
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">{m.about()}</a>
		</li>
	</ul>

	

  <!-- Theme -->
  <button>Toggle</button>
  {#each availableLanguageTags as lang}
	<a 
		href={i18n.route($page.url.pathname)}
		hreflang={lang}
		aria-current={lang === languageTag() ? "page" : undefined}
	>
		{lang}
	</a>
{/each}
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>