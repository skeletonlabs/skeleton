<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Union } from '../../../internal/union.js';
	import type { DayTableCellProps, TableCellProps } from '@zag-js/date-picker';

	export interface DatePickerTableCellProps
		extends Union<TableCellProps, DayTableCellProps>, PropsWithElement<'td'>, HTMLAttributes<'td'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { TableCellContext } from '../modules/table-cell-context.js';
	import { ViewContext } from '../modules/view-context.js';
	import { splitTableCellProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableCellProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();

	const [tableCellProps, componentProps] = $derived(
		splitTableCellProps(props as unknown as TableCellProps) as unknown as [
			Union<TableCellProps, DayTableCellProps>,
			Omit<DatePickerTableCellProps, keyof Union<TableCellProps, DayTableCellProps>>,
		],
	);
	const { element, children, ...rest } = $derived(componentProps);

	const refinedTableCellProps = $derived.by(() => {
		return {
			day: datePicker().getDayTableCellProps,
			month: datePicker().getMonthTableCellProps,
			year: datePicker().getYearTableCellProps,
			// @ts-expect-error number === DateValue
		}[viewProps().view](tableCellProps);
	});

	const attributes = $derived(mergeProps(refinedTableCellProps, rest));

	TableCellContext.provide(() => tableCellProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<td {...attributes}>
		{@render children?.()}
	</td>
{/if}
