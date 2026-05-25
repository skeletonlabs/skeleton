<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableProps extends PropsWithElement<'table'>, HTMLAttributes<'table'> {}
</script>

<script lang="ts">
	import { DatePickerRootContext } from '../modules/root-context.js';
	import { DatePickerViewContext } from '../modules/view-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableProps = $props();

	const datePicker = DatePickerRootContext.consume();
	const viewProps = DatePickerViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getTableProps(viewProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<table {...attributes}>
		{@render children?.()}
	</table>
{/if}
