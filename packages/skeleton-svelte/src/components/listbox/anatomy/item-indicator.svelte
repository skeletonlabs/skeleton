<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ListboxItemIndicatorProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import Check from '../../../internal/components/check.svelte';
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxItemIndicatorProps = $props();

	const listbox = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, children = check, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(listbox().getItemIndicatorProps(itemProps()), rest));
</script>

{#snippet check()}
	<Check class="size-4" />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
