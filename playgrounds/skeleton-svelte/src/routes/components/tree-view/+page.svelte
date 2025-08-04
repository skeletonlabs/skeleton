<script lang="ts">
	import { TreeView, type TreeViewApi } from '@skeletonlabs/skeleton-svelte';
	import Folder from '@lucide/svelte/icons/folder';
	import File from '@lucide/svelte/icons/file';

	let api = $state<TreeViewApi>();
	let collection = $derived(api?.collection.rootNode.children);
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
					{#snippet icon()}
						<Folder />
					{/snippet}
					<TreeView.Item id="LEVEL_2.1" value="zag-js">
						{#snippet icon()}
							<File />
						{/snippet}
					</TreeView.Item>
					<TreeView.Item id="LEVEL_2.2" value="panda">
						{#snippet icon()}
							<File />
						{/snippet}
					</TreeView.Item>
					<TreeView.Branch id="LEVEL_2.3" value="@types">
						{#snippet icon()}
							<Folder />
						{/snippet}
						<TreeView.Item id="LEVEL_3.1" value="react">
							{#snippet icon()}
								<File />
							{/snippet}
						</TreeView.Item>
						<TreeView.Item id="LEVEL_3.2" value="react-dom">
							{#snippet icon()}
								<File />
							{/snippet}
						</TreeView.Item>
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
