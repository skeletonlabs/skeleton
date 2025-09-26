<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ItemProps } from '@zag-js/radio-group';

	export interface SegmentedControlItemProps extends ItemProps, PropsWithElement<'label'>, HTMLAttributes<'label'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context';
	import { RootContext } from '../modules/root-context';
	import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
	import { splitItemProps } from '@zag-js/radio-group';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlItemProps = $props();

	const segmentedControl = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			segmentedControl().getItemProps(itemProps),
			{
				class: classesSegmentedControl.item,
			},
			rest,
		),
	);

	ItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
