<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/listbox';

	export interface ListboxItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { splitItemProps } from '@zag-js/listbox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxItemProps = $props();

	const listbox = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(listbox().getItemProps(itemProps), rest));

	ItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<li {...attributes}>
		{@render children?.()}
	</li>
{/if}
