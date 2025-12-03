<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TreeViewBranchIndentGuideProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { NodeContext } from '../modules/node-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewBranchIndentGuideProps = $props();

	const treeView = RootContext.consume();
	const nodeProps = NodeContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(treeView().getBranchIndentGuideProps(nodeProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
