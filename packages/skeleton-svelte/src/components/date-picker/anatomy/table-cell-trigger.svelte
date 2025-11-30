<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableCellTriggerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { TableCellContext } from '../modules/table-cell-context.js';
	import { ViewContext } from '../modules/view-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableCellTriggerProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();
	const tableCellProps = TableCellContext.consume();

	const { element, children, ...rest } = $derived(props);

	const refinedTableCellProps = $derived.by(() => {
		return {
			day: datePicker().getDayTableCellTriggerProps,
			month: datePicker().getMonthTableCellTriggerProps,
			year: datePicker().getYearTableCellTriggerProps,
			// @ts-expect-error number === DateValue
		}[viewProps().view](tableCellProps());
	});

	const attributes = $derived(mergeProps(refinedTableCellProps, rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
