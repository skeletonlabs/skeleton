<script>
  import DocsLogoHero from '$lib/components/DocsLogos/DocsLogoHero.svelte';
  import HomeHeroComponents from './HomeHeroComponents.svelte';
</script>

<div class="grid grid-cols-1 items-center gap-4 md:gap-10 xl:grid-cols-2">
  <!-- Info -->
  <div class="flex flex-col items-center space-y-4 text-center xl:items-start xl:text-left">
    <DocsLogoHero />
    <h1 class="h1 max-w-[600px] !text-5xl md:!text-6xl">The UI toolkit for Svelte and Tailwind.</h1>
    <p class="max-w-[475px] !text-xl">
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
  <div class="mx-auto mt-20 hidden w-full max-w-[650px] md:inline-block">
    <HomeHeroComponents />
  </div>
</div>
