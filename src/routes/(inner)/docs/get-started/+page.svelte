<script lang="ts">
	import SectionInstall from './SectionInstall.svelte';
	import SectionTailwind from './SectionTailwind.svelte';
	import SectionThemes from './SectionThemes.svelte';
	import SectionStylesheets from './SectionStylesheets.svelte';
</script>

<div class="page-container">
	<header class="space-y-4">
		<h1>Install</h1>
		<!-- prettier-ignore -->
		<p>
			For best results, we recommend you have at least moderate experience with <a href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">Svelte and SvelteKit</a> and <a href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">Tailwind CSS</a>. If you need addition help, check our <a href="/docs/faqs">FAQ</a>.
		</p>
	</header>
	<SectionInstall />
	<SectionTailwind />
	<SectionThemes />
	<SectionStylesheets />

	<!-- Next Steps -->
	<!-- <section class="space-y-4">
		<h2>What's Next?</h2>
		<p>Choose your own adventure. We recommend you review each section listed below.</p>
		<div class="card p-4 variant-glass-surface space-y-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's Tailwind features.</p>
				<a class="btn variant-ghost-surface" href="/elements/tokens">Tailwind Features &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's Svelte features.</p>
				<a class="btn variant-ghost-surface" href="/actions/clipboard">Svelte Features &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's utility features.</p>
				<a class="btn variant-ghost-surface" href="/utilities/codeblocks">Utility Features &rarr;</a>
			</div>
		</div>
	</section> -->
</div>
