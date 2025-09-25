<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ComboboxItemIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ComboboxItemContext } from '../modules/item-context';
	import { ComboboxRootContext } from '../modules/root-context';
	import Check from '@/internal/components/check.svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxItemIndicatorProps = $props();

	const combobox = ComboboxRootContext.consume();
	const itemProps = ComboboxItemContext.consume();

	const { element, children = check, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			combobox().getItemIndicatorProps(itemProps()),
			{
				class: classesCombobox.itemIndicator,
			},
			rest,
		),
	);
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
