<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableHeadProps extends PropsWithElement<'thead'>, HTMLAttributes<'thead'> {}
</script>

<script lang="ts">
	import { DatePickerRootContext } from '../modules/root-context.js';
	import { DatePickerViewContext } from '../modules/view-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableHeadProps = $props();

	const datePicker = DatePickerRootContext.consume();
	const viewProps = DatePickerViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getTableHeadProps(viewProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<thead {...attributes}>
		{@render children?.()}
	</thead>
{/if}
