<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface DatePickerViewControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { ViewContext } from '../modules/view-context';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerViewControlProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			datePicker().getViewControlProps(viewProps?.()),
			{
				class: classesDatePicker.viewControl,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
