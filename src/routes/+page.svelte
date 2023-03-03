<script lang="ts">
	// Docs
	// import DocsLogoAnim from '$docs/components/DocsLogos/DocsLogoAnim.svelte';
	// import DocsIcon from '$docs/components/DocsIcon/DocsIcon.svelte';
	// Components
	// import Avatar from '$lib/components/Avatar/Avatar.svelte';

	// Fetch HTTP Data
	// async function fetchHttpData(url: string, key?: string): Promise<any> {
	// 	const http = await fetch(url);
	// 	const res = await http.json();
	// 	if (http.ok) {
	// 		return key ? res[key] : res;
	// 	} else {
	// 		throw new Error(res);
	// 	}
	// }
	// let contributors: Promise<any> = fetchHttpData('https://api.github.com/repos/skeletonlabs/skeleton/contributors');
</script>

<div>
	<!-- hero -->
	<header id="hero" class="bg-surface-100-800-token hero-gradient">
		<div class="section-container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 place-items-center">
			<!-- Info -->
			<div class="space-y-4">
				<h1>A powerful UI Toolkit<br />for Svelte + Tailwind.</h1>
				<p class="!text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis.</p>
				<div class="flex gap-4">
					<a href="/docs/get-started" class="btn btn-lg variant-filled-primary">Get Started</a>
					<a href="/docs/introduction" class="btn btn-lg variant-soft-primary">Learn More</a>
				</div>
			</div>
			<!-- Components -->
			<div>
				<div class="variant-soft flex justify-center items-center w-[400px] aspect-square">(components)</div>
			</div>
		</div>
	</header>

	<!-- playground -->
	<section id="playground" class="bg-surface-100-800-token">
		<div class="section-container">
			<div class="card variant-soft p-4 md:py-10 text-center flex justify-center items-center gap-4">
				<p class="!text-xl">Try Skeleton live on StackBlitz, no install required.</p>
				<a href={'#'} class="btn variant-filled">Launch</a>
			</div>
		</div>
	</section>

	<!-- sveltekit -->
	<section id="sveltekit" class="bg-surface-100-800-token sveltekit-gradient">
		<div class="section-container">(sveltekit)</div>
	</section>

	<!-- tailwind -->
	<section id="tailwind" class="bg-surface-100-800-token tailwind-gradient">
		<section class="container mx-auto"><hr class="max-w-[100px]" /></section>
		<div class="section-container">(tailwind)</div>
	</section>

	<!-- themes -->
	<section id="themes" class="bg-surface-50-900-token">
		<div class="section-container">
			<div class="card p-4">(themes)</div>
		</div>
	</section>

	<!-- features -->
	<section id="features" class="bg-surface-100-800-token features-gradient">
		<div class="section-container">(features)</div>
	</section>

	<!-- stats -->
	<section id="stats" class="bg-surface-100-800-token">
		<section class="container mx-auto"><hr class="max-w-[100px]" /></section>
		<div class="section-container">(stats)</div>
		<section class="container mx-auto"><hr class="max-w-[100px]" /></section>
	</section>

	<!-- sponsors -->
	<section id="sponsors" class="bg-surface-100-800-token sponsors-gradient">
		<div class="section-container">(sponsors)</div>
	</section>

	<!-- contributors -->
	<section id="contributors" class="bg-surface-50-900-token">
		<div class="section-container">
			<div class="card variant-glass-secondary p-4">(contributors)</div>
		</div>
	</section>

	<!-- bottom-cta -->
	<section id="bottom-cta" class="variant-filled-primary">
		<div class="section-container text-center space-y-4">
			<h2>Ready to Begin?</h2>
			<p class="!text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<a href="/docs/get-started" class="btn btn-lg variant-filled">Get Started</a>
		</div>
	</section>
</div>

<style lang="postcss">
	.section-container {
		@apply container mx-auto p-4 md:py-24;
	}
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) /  0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) /  0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.sveltekit-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) /  0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.tailwind-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) /  0.33) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) /  0.33) 0px, transparent 50%);
	}
	/* Features Gradient */
	/* prettier-ignore */
	.features-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) /  0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) /  0.33) 0px, transparent 50%);
	}
	/* Sponsors Gradient */
	/* prettier-ignore */
	.sponsors-gradient {
		background-image:
		radial-gradient(at 41% 55%, rgba(var(--color-error-500) /  0.17) 0px, transparent 50%),
		radial-gradient(at 0% 99%, rgba(var(--color-secondary-500) /  0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) /  0.19) 0px, transparent 50%);
	}
</style>
