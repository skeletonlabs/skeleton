<script>
	import DocsLogoHero from '$docs/components/DocsLogos/DocsLogoHero.svelte';
	import HomeHeroComponents from './HomeHeroComponents.svelte';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		<DocsLogoHero />
		<h1 class="!text-5xl md:!text-6xl max-w-[600px]">The UI toolkit for Svelte and Tailwind.</h1>
		<p class="!text-xl max-w-[475px]">
			Skeleton allows you to create adaptive and accessible interfaces for web apps of any shape or size.
		</p>
		<div class="flex gap-4">
			<a href="/docs/get-started" class="btn variant-filled-primary">
				<span>Get Started</span>
				<i class="fa-solid fa-arrow-right-long" />
			</a>
			<a href="/docs/introduction" class="btn variant-soft-primary">Learn More</a>
		</div>
	</div>

	<!-- Components -->
	<div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<HomeHeroComponents />
	</div>
</div>
