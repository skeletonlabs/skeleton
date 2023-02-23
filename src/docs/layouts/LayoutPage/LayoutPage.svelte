<script lang="ts">
	import TableOfContents from '$lib/components/TableOfContents/TableOfContents.svelte';

	// @ts-ignore
	// import { VERCEL_ENV } from '$env/static/private';
	import { storeVercelProductionMode } from '$docs/stores/stores';

	// Props
	export let sidebar: boolean = true;

	// Classes
	const cBase = 'page-padding flex items-start gap-10';
	const cColLeft = 'page-container-aside';
	const cColRight = 'sticky top-10 hidden xl:block space-y-4 w-72';

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
			{#if $storeVercelProductionMode === true}
				<script
					async
					type="text/javascript"
					src="//cdn.carbonads.com/carbon.js?serve=CWYD627U&placement=carbonadsnet"
					id="_carbonads_js"
				></script>
			{/if}
			<!-- Table of Contents -->
			<TableOfContents target=".layout-docs-content" minimumHeadings={1} />
		</aside>
	{/if}
</div>
