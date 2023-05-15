<script lang="ts">
	// Types
	import type { DocsShellSettings } from '$docs/layouts/DocsShell/types';
	// Sveld Mapper
	import { sveldMapperSlots } from '$docs/layouts/DocsShell/sveldMapper';
	// Components
	import { Table } from '@skeletonlabs/skeleton';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cBase = 'space-y-10';

	// Reactive
	$: classesBase = `${cBase}`;
</script>

<div class="doc-shell-slots {classesBase}">
	{#if pageData.components}
		{#each pageData.components as comp}
			{#if comp.sveld.slots.length > 0}
				{@const tableSource = sveldMapperSlots(comp)}
				<section class="space-y-4">
					{#if comp.label}<h2 class="h2">{comp.label}</h2>{/if}
					{#if comp.descSlots}<div>{@html comp.descSlots}</div>{/if}
					{#if tableSource.body.length > 0}<Table source={tableSource} />{/if}
				</section>
			{/if}
		{/each}
	{/if}
</div>
