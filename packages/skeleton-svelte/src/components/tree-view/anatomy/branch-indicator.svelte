<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TreeViewBranchIndicatorProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import ChevronRight from '../../../internal/components/chevron-right.svelte';
	import { NodeContext } from '../modules/node-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewBranchIndicatorProps = $props();

	const treeView = RootContext.consume();
	const nodeProps = NodeContext.consume();

	const { element, children = chevronRight, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(treeView().getBranchIndicatorProps(nodeProps()), rest));
</script>

{#snippet chevronRight()}
	<ChevronRight class="size-4" />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
