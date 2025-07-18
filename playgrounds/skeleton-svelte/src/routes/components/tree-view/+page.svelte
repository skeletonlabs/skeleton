<script lang="ts">
	import { TreeView, type TreeViewApi } from '@skeletonlabs/skeleton-svelte';

	let api = $state<TreeViewApi>();
	let collection = $derived(api?.collection.rootNode.children);

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
	<button onclick={() => api?.expand()}> Expand All </button>
	<button onclick={() => api?.collapse()}> Collapse All </button>
	<div class="flex justify-between w-full">
		<section>
			<TreeView selectionMode="multiple" onApiReady={(treeViewApi: TreeViewApi) => (api = treeViewApi)}>
				<TreeView.Branch id="LEVEL_1" value="node_modules">
					<TreeView.Item id="LEVEL_2.1" value="zag-js" />
					<TreeView.Item id="LEVEL_2.2" value="panda" />
					<TreeView.Branch id="LEVEL_2.3" value="@types">
						<TreeView.Item id="LEVEL_3.1" value="react" />
						<TreeView.Item id="LEVEL_3.2" value="react-dom" />
					</TreeView.Branch>
				</TreeView.Branch>
			</TreeView>
		</section>
		<div class="flex gap-2 fixed top-5 right-5 max-h-svh">
			<div>
				<p>Selected values:</p>
				<pre class="pre h-fit">{JSON.stringify(api?.selectedValue, null, 2)}</pre>
			</div>
			<div>
				<p>Expanded values:</p>
				<pre class="pre h-fit">{JSON.stringify(api?.expandedValue, null, 2)}</pre>
			</div>
			<div>
				<p>Collection:</p>
				<pre class="pre h-fit">{JSON.stringify(collection, null, 2)}</pre>
			</div>
		</div>
	</div>
</div>
