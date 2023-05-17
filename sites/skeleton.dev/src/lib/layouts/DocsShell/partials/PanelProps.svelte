<script lang="ts">
	// Types
	import type { DocsShellSettings } from '$lib/layouts/DocsShell/types';
	// Sveld Mapper
	import { sveldMapperProps } from '$lib/layouts/DocsShell/sveldMapper';
	// Components
	import { Table } from '@skeletonlabs/skeleton';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cBase = 'space-y-10';

	// Reactive
	$: classesBase = `${cBase}`;
</script>

<div class="doc-shell-properties {classesBase}">
	<!-- RestProps -->
	{#if pageData.restProps}
		<aside class="alert variant-ghost-warning">
			<!-- prettier-ignore -->
			<div class="alert-message">
				<p>This component implements <a class="anchor" href="https://svelte.dev/docs#template-syntax-attributes-and-props" target="_blank" rel="noreferrer">restProps</a>. This passes all extra attributes to the component's <code class="code">{pageData.restProps}</code> elements.</p>
			</div>
		</aside>
	{/if}
	<!-- Tables -->
	{#if pageData.components}
		{#each pageData.components as comp}
			{#if comp.sveld.props.length > 0}
				{@const tableSource = sveldMapperProps(comp)}
				<section class="space-y-4">
					{#if comp.label}<h2 class="h2">{comp.label}</h2>{/if}
					{#if comp.descProps}<div>{@html comp.descProps}</div>{/if}
					{#if tableSource.body.length > 0}
						<Table element="table" source={tableSource} />
					{/if}
					{#if comp.overrideProps}
						<div><em>{comp.label} can override: <span class="text-primary-500">{comp.overrideProps.join(', ')}</span>.</em></div>
					{/if}
				</section>
			{/if}
		{/each}
	{/if}
</div>
