<script lang="ts">
	import { TreeView } from '@skeletonlabs/skeleton-svelte';

	const collection = [
		{
			id: 'node_modules',
			value: 'node_modules',
			children: [
				{ id: 'node_modules/zag-js', value: 'zag-js' },
				{ id: 'node_modules/pandacss', value: 'panda' },
				{
					id: 'node_modules/@types',
					value: '@types',
					children: [
						{ id: 'node_modules/@types/react', value: 'react' },
						{ id: 'node_modules/@types/react-dom', value: 'react-dom' }
					]
				}
			]
		}
	];
</script>

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
	{#snippet nodeText(text: string)}
		<span>{text} ✨</span>
	{/snippet}
</TreeView>
