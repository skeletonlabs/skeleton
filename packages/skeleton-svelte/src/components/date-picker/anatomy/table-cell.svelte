<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { TableCellProps } from '@zag-js/date-picker';

	export interface DatePickerTableCellProps extends TableCellProps, PropsWithElement<'td'>, HTMLAttributes<'td'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { TableCellContext } from '../modules/table-cell-context';
	import { ViewContext } from '../modules/view-context';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import { splitTableCellProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableCellProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();

	const [tableCellProps, componentProps] = $derived(splitTableCellProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	function getTableCellProps(tableCellProps: TableCellProps) {
		switch (viewProps().view) {
			case 'day':
				// @ts-expect-error value is number filter
				return datePicker().getDayTableCellProps(tableCellProps);
			case 'month':
				return datePicker().getMonthTableCellProps(tableCellProps);
			case 'year':
				return datePicker().getYearTableCellProps(tableCellProps);
		}
	}

	const attributes = $derived(
		mergeProps(
			getTableCellProps(tableCellProps),
			{
				class: classesDatePicker.tableCell,
			},
			rest,
		),
	);

	TableCellContext.provide(() => tableCellProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<td {...attributes}>
		{@render children?.()}
	</td>
{/if}
