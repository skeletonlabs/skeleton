<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ViewProps } from '@zag-js/date-picker';

	export interface DatePickerViewProps extends Required<ViewProps>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { ViewContext } from '../modules/view-context';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import { splitViewProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerViewProps = $props();

	const datePicker = RootContext.consume();

	const [viewProps, componentProps] = $derived(splitViewProps(props) as [Required<ViewProps>, Omit<DatePickerViewProps, keyof ViewProps>]);
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			datePicker().getViewProps(viewProps),
			{
				class: classesDatePicker.view,
			},
			rest,
		),
	);

	ViewContext.provide(() => viewProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
