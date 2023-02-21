<script lang="ts">
	import TableOfContents from '$lib/components/TableOfContents/TableOfContents.svelte';

	// Props
	export let sidebar: boolean = true;

	// Classes
	const cBase = 'page-padding flex items-start gap-10';
	const cColLeft = 'page-container-aside';
	const cColRight = 'sticky top-10 hidden xl:block space-y-4 w-60';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesColLeft = `${cColLeft}`;
	$: classesColRight = `${cColRight}`;
</script>

<div class="layout-docs {classesBase}">
	<!-- Content -->
	<div class="layout-docs-content {classesColLeft}">
		<slot />
	</div>
	<!-- Aside -->
	{#if sidebar}
		<aside class="layout-cols-aside {classesColRight}">
			<!-- Ad Position -->
			<div class="bg-black/50 w-full h-[100px] flex justify-center items-center rounded-container-token">(carbon)</div>
			<!-- Table of Contents -->
			<TableOfContents target=".layout-docs-content" minimumHeadings={1} />
		</aside>
	{/if}
</div>
