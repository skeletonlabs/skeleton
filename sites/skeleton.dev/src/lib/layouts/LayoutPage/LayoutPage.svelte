<script lang="ts">
	import { storeVercelProductionMode } from '$lib/stores/stores';
	import { TableOfContents } from '@skeletonlabs/skeleton';

	// Props
	export let sidebar = true;
	export let tocKey: any = undefined;

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
				<!-- Production Ad -->
				<!-- cspell:disable -->
				<!-- cspell:disable -->
				<!-- cspell:disable -->
				<!-- cspell:disable -->
				<script
					async
					type="text/javascript"
					src="//cdn.carbonads.com/carbon.js?serve=CWYD627U&placement=carbonadsnet"
					id="_carbonads_js"
				></script>
				<!-- cspell:enable -->
			{:else}
				<!-- Staging Placeholder -->
				<!-- <div class="bg-surface-50-900-token ring-[1px] ring-surface-500/10 w-[286px] h-[120px] flex justify-center items-center">
					<span class="opacity-25">(ad)</span>
				</div> -->
			{/if}
			<!-- Table of Contents -->
			{#key tocKey}
				<TableOfContents target=".layout-docs-content" minimumHeadings={1} />
			{/key}
		</aside>
	{/if}
</div>
