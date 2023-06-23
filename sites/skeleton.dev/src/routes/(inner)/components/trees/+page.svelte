<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Tree, TreeItem } from '@skeletonlabs/skeleton';
	// Utilities
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTree from '@skeletonlabs/skeleton/components/Tree/Tree.svelte?raw&sveld';
	import sveldTreeItem from '@skeletonlabs/skeleton/components/Tree/TreeItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Trees',
		description: 'Display information in a hierarchical structure using collapsible nodes.',
		imports: ['Tree', 'TreeItem'],
		source: 'components/Tree',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
		components: [
			{ label: 'Tree', sveld: sveldTree },
			{
				label: 'TreeItem',
				sveld: sveldTreeItem,
				overrideProps: []
			}
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="text-center">
			<svelte:fragment slot="preview">
				<Tree>
					<TreeItem>
						<p>Item 1</p>
						<svelte:fragment slot="children">
							<TreeItem>
								<p>Child 1</p>
							</TreeItem>
							<TreeItem>
								<p>Child 2</p>
							</TreeItem>
							<TreeItem>
								<p>Child 3</p>
							</TreeItem>
						</svelte:fragment>
					</TreeItem>
					<TreeItem>
						<p>Item 2</p>
						<svelte:fragment slot="children">
							<TreeItem>
								<p>Child 1</p>
								<svelte:fragment slot="children">
									<TreeItem>
										<p>Child of Child 1</p>
									</TreeItem>
									<TreeItem>
										<p>Child of Child 2</p>
									</TreeItem>
									<TreeItem>
										<p>Child of Child 3</p>
									</TreeItem>
								</svelte:fragment>
							</TreeItem>
							<TreeItem>
								<p>Child 2</p>
							</TreeItem>
							<TreeItem>
								<p>Child 3</p>
							</TreeItem>
						</svelte:fragment>
					</TreeItem>
					<TreeItem>
						<p>Item 3</p>
					</TreeItem>
				</Tree>
			</svelte:fragment>
			<svelte:fragment slot="source" />
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage" />
</DocsShell>
