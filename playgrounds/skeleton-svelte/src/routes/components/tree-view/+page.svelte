<script lang="ts">
	import { TreeView } from '@skeletonlabs/skeleton-svelte';

	let valueDefault = $state(['LEVEL_1']);
	let valueIcons = $state(['LEVEL_1']);

	// const collection: TreeViewCollection = [
	// 	{
	// 		id: 'LEVEL_1',
	// 		value: 'node_modules',
	// 		children: [
	// 			{ id: 'LEVEL_2.1', value: 'zag-js' },
	// 			{ id: 'LEVEL_2.2', value: 'panda' },
	// 			{
	// 				id: 'LEVEL_2.3',
	// 				value: '@types',
	// 				children: [
	// 					{ id: 'LEVEL_3.1', value: 'react' },
	// 					{ id: 'LEVEL_3.2', value: 'react-dom' }
	// 				]
	// 			}
	// 		]
	// 	}
	// ];
</script>

<div class="space-y-10 w-full">
	<header>
		<h1 class="h1">Tree View</h1>
	</header>
	<div class="flex justify-between w-full">
		<section>
			<TreeView onCheckedChange={(e) => console.log(e)}>
				<TreeView.Branch id="this_is_the_first_branch" value="ah thats why">
					<TreeView.Item id="it_also_has_an_id" value="this also has a value">and this would be child item</TreeView.Item>
					do yo mind?
				</TreeView.Branch>
				<TreeView.Item id="test1" value="this is value 1 "></TreeView.Item>
				<TreeView.Item id="test2" value="this is value 2"></TreeView.Item>
				<TreeView.Item id="test3" value=" this is value 3"></TreeView.Item>
				<TreeView.Item id="test4" value="this is value 4"></TreeView.Item>
			</TreeView>
		</section>
		<!-- <section>
			<section class="space-y-4">
				<h2 class="h2">Default</h2>
				<pre class="pre">{JSON.stringify(valueDefault)}</pre>
				<TreeView {collection} expandedValue={valueDefault} onExpandedChange={(e) => (valueDefault = e.expandedValue)}></TreeView>
			</section>
			<section class="space-y-4">
				<h2 class="h2">Icons</h2>
				<pre class="pre">{JSON.stringify(valueIcons)}</pre>
				<TreeView {collection} expandedValue={valueIcons} onExpandedChange={(e) => (valueIcons = e.expandedValue)}>
					{#snippet branchIndicator()}
						<IconArrow />
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
		<pre class="pre h-fit">{JSON.stringify(collection, null, 2)}</pre> -->
	</div>
</div>
