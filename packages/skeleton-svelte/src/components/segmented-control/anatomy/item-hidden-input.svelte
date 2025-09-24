<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SegmentedControlItemHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { SegmentedControlItemContext } from '../modules/item-context';
	import { SegmentedControlRootContext } from '../modules/root-context';
	import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlItemHiddenInputProps = $props();

	const segmentedcontrol = SegmentedControlRootContext.consume();
	const itemProps = SegmentedControlItemContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			segmentedcontrol().getItemHiddenInputProps(itemProps()),
			{
				class: classesSegmentedControl.itemHiddenInput,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
