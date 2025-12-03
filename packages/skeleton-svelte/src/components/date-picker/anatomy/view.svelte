<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ViewProps } from '@zag-js/date-picker';

	export interface DatePickerViewProps extends ViewProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { ViewContext } from '../modules/view-context.js';
	import { splitViewProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerViewProps = $props();

	const datePicker = RootContext.consume();

	const [viewProps, componentProps] = $derived(splitViewProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(datePicker().getViewProps(viewProps), rest));

	ViewContext.provide(() => viewProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
