<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableHeaderProps extends PropsWithElement<'th'>, HTMLAttributes<'th'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { ViewContext } from '../modules/view-context.js';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableHeaderProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			datePicker().getTableHeaderProps(viewProps()),
			{
				class: classesDatePicker.tableHeader,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<th {...attributes}>
		{@render children?.()}
	</th>
{/if}
