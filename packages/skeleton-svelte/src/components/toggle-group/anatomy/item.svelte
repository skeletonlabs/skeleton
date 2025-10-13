<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ItemProps } from '@zag-js/toggle-group';

	// Omit keys that overlap between ItemProps and native button attributes to avoid type conflicts
	export interface ToggleGroupItemProps extends ItemProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'disabled' | 'value'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context';
	import { RootContext } from '../modules/root-context';
	import { classesToggleGroup } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { splitItemProps } from '@zag-js/toggle-group';

	const props: ToggleGroupItemProps = $props();

	const toggleGroup = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			toggleGroup().getItemProps(itemProps),
			{
				class: classesToggleGroup.item,
			},
			rest,
		),
	);

	ItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
