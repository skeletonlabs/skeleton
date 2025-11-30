<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableBodyProps extends PropsWithElement<'tbody'>, HTMLAttributes<'tbody'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { ViewContext } from '../modules/view-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableBodyProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getTableBodyProps(viewProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<tbody {...attributes}>
		{@render children?.()}
	</tbody>
{/if}
