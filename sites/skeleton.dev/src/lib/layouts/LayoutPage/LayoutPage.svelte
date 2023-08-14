<script lang="ts">
	import { storeVercelProductionMode } from '$lib/stores/stores';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';

	// Props
	export let sidebar = true;
	export let tocKey: unknown = undefined;

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
	<div class="layout-docs-content {classesColLeft}" use:tocCrawler={{ mode: 'generate', scrollTarget: '#page', key: tocKey }}>
		<slot />
	</div>
	<!-- Aside -->
	{#if sidebar}
		<!-- Ad Position -->
		<aside class="layout-cols-aside {classesColRight}">
			<!-- Ad Position (production only) -->
			{#if $storeVercelProductionMode === true}
				<script
					async
					type="text/javascript"
					src="//cdn.carbonads.com/carbon.js?serve=CWYD627U&placement=carbonadsnet"
					id="_carbonads_js"
				></script>
			{/if}
			<!-- Table of Contents -->
			<TableOfContents>On the Page</TableOfContents>
		</aside>
	{/if}
</div>
