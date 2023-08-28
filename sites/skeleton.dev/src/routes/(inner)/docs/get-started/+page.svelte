<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Section Components
	import SectionInstall from './SectionInstall.svelte';
	import SectionSkeleton from './SectionSkeleton.svelte';
	import SectionTailwind from './SectionTailwind.svelte';
	import SectionThemes from './SectionThemes.svelte';
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Get Started</h1>
		<!-- prettier-ignore -->
		<p>
			We recommend at least moderate experience with <a class="anchor" href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">Svelte</a>, <a class="anchor" href="https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank" rel="noreferrer">SvelteKit</a>, and <a class="anchor" href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">Tailwind CSS</a> before your proceed.
		</p>
		<aside class="alert variant-ghost">
			<i class="fa-solid fa-triangle-exclamation" />
			<p>Please be aware that Skeleton only supports <u>SvelteKit applications</u> at this time.</p>
		</aside>
	</header>
	<hr />
	<SectionInstall />
	<SectionSkeleton />
	<SectionTailwind />
	<SectionThemes />
</LayoutPage>
