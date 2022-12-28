<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldAppBar from '$lib/components/AppBar/AppBar.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Bar',
		description: 'A header element for the top of your page layout. Pairs well with the <a href="/components/app-shell">App Shell</a>.',
		imports: ['AppBar'],
		source: 'components/AppBar',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
		components: [{ sveld: sveldAppBar }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<AppBar>
			<svelte:fragment slot="lead">
				<span class="text-base md:text-3xl font-bold uppercase">Logo</span>
			</svelte:fragment>
			<input type="search" placeholder="Search..." class="max-w-[200px]" />
			<svelte:fragment slot="trail">
				<div class="flex items-center space-x-6">
					<a href="/components/app-bar">Link</a>
					<i class="fa-solid fa-image text-xl" />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<CodeBlock
			language="html"
			code={`
<AppBar>
	<svelte:fragment slot="lead">(lead)</svelte:fragment>
	(center)
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</AppBar>`}
		/>
	</svelte:fragment>
</DocsShell>
