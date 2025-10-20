<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface DatePickerTableCellTriggerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { TableCellContext } from '../modules/table-cell-context';
	import { ViewContext } from '../modules/view-context';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import type { TableCellProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableCellTriggerProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();
	const tableCellProps = TableCellContext.consume();

	const { element, children, ...rest } = $derived(props);

	const refinedTableCellProps = $derived.by(() => {
		const view = viewProps?.()?.view;
		if (!view) {
			return {};
		}
		return {
			day: datePicker().getDayTableCellProps,
			month: datePicker().getMonthTableCellProps,
			year: datePicker().getYearTableCellProps,
			// @ts-expect-error number === DateValue
		}[view](tableCellProps());
	});

	const attributes = $derived(
		mergeProps(
			refinedTableCellProps,
			{
				class: classesDatePicker.tableCellTrigger,
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
