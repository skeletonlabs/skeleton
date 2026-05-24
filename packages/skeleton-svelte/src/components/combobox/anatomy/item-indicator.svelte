<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ComboboxItemIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import Check from '../../../internal/components/check.svelte';
	import { ComboboxItemContext } from '../modules/item-context.js';
	import { ComboboxRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxItemIndicatorProps = $props();

	const combobox = ComboboxRootContext.consume();
	const itemProps = ComboboxItemContext.consume();

	const { element, children = check, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(combobox().getItemIndicatorProps(itemProps()), rest));
</script>

{#snippet check()}
	<Check class="size-4" />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
