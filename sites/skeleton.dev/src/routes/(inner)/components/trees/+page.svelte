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
				<Tree class="text-on-primary-token">
					<TreeItem on:toggle={(e) => console.log(e.detail.open)}>
						<p>Item 1</p>
						<svelte:fragment slot="children">
							<TreeItem>
								<p>Child 1</p>
								<svelte:fragment slot="children">
									<TreeItem>
										<p>child of child 1</p>
									</TreeItem>
									<TreeItem>
										<p>child of child 2</p>
									</TreeItem>
								</svelte:fragment>
							</TreeItem>
							<TreeItem>
								<p>Child 2</p>
							</TreeItem>
						</svelte:fragment>
					</TreeItem>
					<TreeItem>
						<p>Item 2</p>
						<svelte:fragment slot="children">
							<TreeItem>
								<p>child</p>
							</TreeItem>
						</svelte:fragment>
					</TreeItem>
				</Tree>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<Tree>
	<TreeItem>
		(item 1)
		<svelte:fragment slot="children">
			<TreeItem>
				(child 1)
				<svelte:fragment slot="children">
					<TreeItem>
						(child of child 1)
					</TreeItem>
					<TreeItem>
						(child of child 2)
					</TreeItem>
				</svelte:fragment>
			</TreeItem>
			<TreeItem>
				(child 2)
			</TreeItem>
		</svelte:fragment>
	</TreeItem>
	<TreeItem>
		(item 2)
	</TreeItem>
</Tree>
				`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Icons</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<Tree>
						<TreeItem open>
							<svelte:fragment slot="lead">
								<i class="fa-solid fa-skull" />
							</svelte:fragment>
							<p>Item 1</p>
							<svelte:fragment slot="children">
								<TreeItem>
									<svelte:fragment slot="lead">
										<i class="fa-solid fa-skull-crossbones" />
									</svelte:fragment>
									<p>child 1</p>
								</TreeItem>
								<TreeItem>
									<svelte:fragment slot="lead">
										<i class="fa-solid fa-skull-crossbones" />
									</svelte:fragment>
									<p>child 2</p>
								</TreeItem>
							</svelte:fragment>
						</TreeItem>
					</Tree>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<Tree>
	<TreeItem>
		<svelte:fragment slot="lead">
			(icon)
		</svelte:fragment>
		(item 1)
	</TreeItem>
</Tree>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
