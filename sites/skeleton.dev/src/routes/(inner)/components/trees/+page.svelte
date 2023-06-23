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
		],
		keyboard: []
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="text-center">
			<svelte:fragment slot="preview">
				<Tree selectionMode="single">
					<TreeItem>
						<svelte:fragment slot="lead">
							<i class="fa-regular fa-folder-closed" />
						</svelte:fragment>
						parent
						<svelte:fragment slot="children">
							<TreeItem>
								<svelte:fragment slot="lead">
									<i class="fa-regular fa-folder-closed" />
								</svelte:fragment>
								parent
								<svelte:fragment slot="children">
									<TreeItem>
										<svelte:fragment slot="lead">
											<i class="fa-regular fa-file" />
										</svelte:fragment>
										child
									</TreeItem>
								</svelte:fragment>
							</TreeItem>
							<TreeItem>
								<svelte:fragment slot="lead">
									<i class="fa-regular fa-folder-closed" />
								</svelte:fragment>
								parent
								<svelte:fragment slot="children">
									<TreeItem>
										<svelte:fragment slot="lead">
											<i class="fa-regular fa-file" />
										</svelte:fragment>
										child
									</TreeItem>
								</svelte:fragment>
							</TreeItem>
							<TreeItem>
								<svelte:fragment slot="lead">
									<i class="fa-regular fa-file" />
								</svelte:fragment>
								child
							</TreeItem>
							<TreeItem>
								<svelte:fragment slot="lead">
									<i class="fa-regular fa-file" />
								</svelte:fragment>
								child
							</TreeItem>
							<TreeItem>
								<svelte:fragment slot="lead">
									<i class="fa-regular fa-file" />
								</svelte:fragment>
								child
							</TreeItem>
							<TreeItem>
								<svelte:fragment slot="lead">
									<i class="fa-regular fa-file" />
								</svelte:fragment>
								child
							</TreeItem>
						</svelte:fragment>
					</TreeItem>
					<TreeItem>
						<svelte:fragment slot="lead">
							<i class="fa-regular fa-folder-closed" />
						</svelte:fragment>
						tree item
					</TreeItem>
					<TreeItem>
						<svelte:fragment slot="lead">
							<i class="fa-regular fa-folder-closed" />
						</svelte:fragment>
						tree item
					</TreeItem>
					<TreeItem>
						<svelte:fragment slot="lead">
							<i class="fa-regular fa-folder-closed" />
						</svelte:fragment>
						tree item
					</TreeItem>
				</Tree>
			</svelte:fragment>
			<svelte:fragment slot="source" />
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage" />
</DocsShell>
