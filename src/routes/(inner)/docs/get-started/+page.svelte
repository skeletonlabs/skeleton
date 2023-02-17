<script lang="ts">
	import SectionInstall from './SectionInstall.svelte';
	import SectionTailwind from './SectionTailwind.svelte';
	import SectionThemes from './SectionThemes.svelte';
	import SectionStylesheets from './SectionStylesheets.svelte';
</script>

<div class="page-container">
	<header class="space-y-4">
		<h1>Get Started</h1>
		<!-- prettier-ignore -->
		<p>
			We recommend you have at least moderate experience with <a href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">Svelte</a>, <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank" rel="noreferrer">SvelteKit</a>, and <a href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">Tailwind CSS</a>.
		</p>
	</header>
	<SectionInstall />
	<SectionTailwind />
	<SectionThemes />
	<SectionStylesheets />
</div>
