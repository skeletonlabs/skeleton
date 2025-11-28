<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTableHeadProps extends PropsWithElement<'thead'>, HTMLAttributes<'thead'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { ViewContext } from '../modules/view-context.js';
	import * as classes from '@skeletonlabs/skeleton-common/classes';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTableHeadProps = $props();

	const datePicker = RootContext.consume();
	const viewProps = ViewContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			datePicker().getTableHeadProps(viewProps()),
			{
				class: classes.datePicker.tableHead,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<thead {...attributes}>
		{@render children?.()}
	</thead>
{/if}
