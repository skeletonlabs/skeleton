<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableRowProps extends PropsWithElement<'tr'>, HTMLAttributes<'tr'> {}
</script>

<script lang="ts">
	import { DatePickerRootContext } from '../modules/root-context.js';
	import { DatePickerViewContext } from '../modules/view-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableRowProps = $props();

	const datePicker = DatePickerRootContext.consume();
	const viewProps = DatePickerViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getTableRowProps(viewProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<tr {...attributes}>
		{@render children?.()}
	</tr>
{/if}
