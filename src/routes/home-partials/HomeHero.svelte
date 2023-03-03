<script>
	import DocsLogoHero from '$docs/components/DocsLogos/DocsLogoHero.svelte';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		<DocsLogoHero />
		<h1 class="max-w-[600px]">Build reactive UI using the power of Svelte + Tailwind.</h1>
		<p class="!text-xl">Use Skeleton to quickly generate reactive UI.</p>
		<div class="flex gap-4">
			<a href="/docs/get-started" class="btn btn-lg variant-filled-primary">
				<span>Get Started</span>
				<i class="fa-solid fa-arrow-right" />
			</a>
			<a href="/docs/introduction" class="btn btn-lg variant-soft-primary">Learn More</a>
		</div>
	</div>

	<!-- Components -->
	<div class="hidden xl:block">
		<div class="variant-soft flex justify-center items-center w-full aspect-video">
			<span class="badge variant-soft">Components</span>
		</div>
	</div>
</div>
