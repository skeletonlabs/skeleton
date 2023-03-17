<script lang="ts">
	// HTTP response data provided by +page.ts
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ contributors } = data);

	// Components
	import HomeFeatures from './home-partials/HomeFeatures.svelte';
	// Page Partials
	import HomeHero from './home-partials/HomeHero.svelte';
	import HomePlayground from './home-partials/HomePlayground.svelte';
	import HomeSponsors from './home-partials/HomeSponsors.svelte';
	import HomeStats from './home-partials/HomeStats.svelte';
	import HomeSvelteKit from './home-partials/HomeSvelteKit.svelte';
	import HomeTailwind from './home-partials/HomeTailwind.svelte';
	import HomeTheming from './home-partials/HomeTheming.svelte';
	import HomeContributors from './home-partials/HomeContributors.svelte';
	import HomeBottomCta from './home-partials/HomeBottomCta.svelte';
</script>

<div>
	<!-- hero -->
	<header id="hero" class="bg-surface-100-800-token hero-gradient">
		<div class="section-container"><HomeHero /></div>
	</header>

	<!-- playground -->
	<section id="playground" class="bg-surface-100-800-token">
		<div class="section-container"><HomePlayground /></div>
	</section>

	<!-- sveltekit -->
	<section id="sveltekit" class="bg-surface-100-800-token sveltekit-gradient">
		<div class="section-container"><HomeSvelteKit /></div>
	</section>

	<!-- tailwind -->
	<section id="tailwind" class="bg-surface-100-800-token tailwind-gradient">
		<div class="section-container"><HomeTailwind /></div>
	</section>

	<!-- theming -->
	<section id="theming" class="bg-surface-50-900-token">
		<div class="section-container"><HomeTheming /></div>
	</section>

	<!-- features -->
	<section id="features" class="bg-surface-100-800-token features-gradient">
		<div class="section-container"><HomeFeatures /></div>
	</section>

	<!-- stats -->
	<section id="stats" class="bg-surface-100-800-token">
		<div class="section-container"><HomeStats /></div>
	</section>

	<!-- sponsors -->
	<section id="sponsors" class="bg-surface-100-800-token sponsors-gradient">
		<div class="section-container"><HomeSponsors /></div>
	</section>

	<!-- contributors -->
	<section id="contributors" class="bg-surface-50-900-token contributors-gradient">
		<div class="section-container"><HomeContributors {contributors} /></div>
	</section>

	<!-- bottom-cta -->
	<section id="bottom-cta" class="bottom-cta-gradient">
		<div class="section-container"><HomeBottomCta /></div>
	</section>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.sveltekit-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.tailwind-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
	/* Features Gradient */
	/* prettier-ignore */
	.features-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}
	/* Sponsors Gradient */
	/* prettier-ignore */
	.sponsors-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
	/* Radial */
	/* prettier-ignore */
	.bottom-cta-gradient {
		@apply bg-primary-500 text-on-primary-token;
		background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%),
		radial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%);
	}
</style>
