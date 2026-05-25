<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TreeViewBranchTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/node-context.js';
	import { TreeViewRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewBranchTextProps = $props();

	const treeView = TreeViewRootContext.consume();
	const nodeProps = TreeViewNodeContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(treeView().getBranchTextProps(nodeProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
