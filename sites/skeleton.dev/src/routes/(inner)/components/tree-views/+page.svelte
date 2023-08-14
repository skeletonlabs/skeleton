<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	// Utilities
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTreeView from '@skeletonlabs/skeleton/components/TreeView/TreeView.svelte?raw&sveld';
	import sveldTreeViewItem from '@skeletonlabs/skeleton/components/TreeView/TreeViewItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tree Views',
		description: 'Display information in a hierarchical structure using collapsible nodes.',
		imports: ['TreeView', 'TreeViewItem'],
		source: 'components/TreeView',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
		components: [
			{ label: 'TreeView', sveld: sveldTreeView },
			{
				label: 'TreeViewItem',
				sveld: sveldTreeViewItem,
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
				<div class="w-full max-w-[480px] card p-4 text-token">
					<TreeView>
						<TreeViewItem on:toggle={(e) => console.log(e.detail.open)}>
							<p>Item 1</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Child 1</p>
									<svelte:fragment slot="children">
										<TreeViewItem>
											<p>Child of Child 1</p>
										</TreeViewItem>
										<TreeViewItem>
											<p>Child of Child 2</p>
										</TreeViewItem>
									</svelte:fragment>
								</TreeViewItem>
								<TreeViewItem>
									<p>Child 2</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<p>Item 2</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>Child</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
					</TreeView>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<TreeView>
	<TreeViewItem>
		(item 1)
		<svelte:fragment slot="children">
			<TreeViewItem>
				(Child 1)
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child of Child 1)
					</TreeViewItem>
					<TreeViewItem>
						(Child of Child 2)
					</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(Child 2)
			</TreeViewItem>
		</svelte:fragment>
	</TreeViewItem>
	<TreeViewItem>
		(item 2)
	</TreeViewItem>
</TreeView>
				`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Icons -->
		<section class="space-y-4">
			<h2 class="h2">Icons</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TreeView>
						<TreeViewItem open>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-skull" />
							</svelte:fragment>
							<p>Item 1</p>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<svelte:fragment slot="lead">
										<i class="fa-solid fa-skull-crossbones" />
									</svelte:fragment>
									<p>Child 1</p>
								</TreeViewItem>
								<TreeViewItem>
									<svelte:fragment slot="lead">
										<i class="fa-solid fa-skull-crossbones" />
									</svelte:fragment>
									<p>Child 2</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
					</TreeView>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<TreeView>
	<TreeViewItem>
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		(item 1)
	</TreeViewItem>
</TreeView>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
