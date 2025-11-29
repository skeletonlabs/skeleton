<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TreeViewLabelProps extends PropsWithElement<'h3'>, HTMLAttributes<'h3'> {
		/**
		 * The level of the heading.
		 *
		 * @defaultValue 3
		 */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewLabelProps = $props();

	const treeView = RootContext.consume();

	const { level = 3, element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(treeView().getLabelProps(), rest));

	const tag = $derived(`h${level}`);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<svelte:element this={tag} {...attributes}>
		{@render children?.()}
	</svelte:element>
{/if}
