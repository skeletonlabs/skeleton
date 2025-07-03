<script lang="ts">
	import { TreeView } from '@skeletonlabs/skeleton-svelte';
	import IconDelete from '@lucide/svelte/icons/arrow-big-right';

	let valueDefault = $state(['LEVEL_1']);
	let valueIcons = $state(['LEVEL_1']);

	const collection = [
		{
			id: 'LEVEL_1',
			value: 'node_modules',
			children: [
				{ id: 'LEVEL_2.1', value: 'zag-js' },
				{ id: 'LEVEL_2.2', value: 'panda' },
				{
					id: 'LEVEL_2.3',
					value: '@types',
					children: [
						{ id: 'LEVEL_3.1', value: 'react' },
						{ id: 'LEVEL_3.2', value: 'react-dom' }
					]
				}
			]
		}
	];
</script>

<div class="space-y-10 w-full">
	<header>
		<h1 class="h1">Tree View</h1>
	</header>
	<div class="flex justify-between w-full">
		<section>
			<section class="space-y-4">
				<h2 class="h2">Default</h2>
				<pre class="pre">{JSON.stringify(valueDefault)}</pre>
				<TreeView {collection} expandedValue={valueDefault} onExpandedChange={(e) => (valueDefault = e.expandedValue)}></TreeView>
			</section>
			<section class="space-y-4">
				<h2 class="h2">Icons</h2>
				<TreeView {collection}>
					{#snippet nodeIndicator()}
						&rArr;
					{/snippet}
					{#snippet branchIcon()}
						📁
					{/snippet}
					{#snippet itemIcon()}
						📄
					{/snippet}
				</TreeView>
			</section>
		</section>
		<pre class="pre">{JSON.stringify(collection, null, 2)}</pre>
	</div>
</div>
