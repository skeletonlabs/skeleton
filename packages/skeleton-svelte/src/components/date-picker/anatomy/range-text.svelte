<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerRangeTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerRangeTextProps = $props();

	const datePicker = RootContext.consume();

	const rangeText = $derived(Array.from(new Set([datePicker().visibleRangeText.start, datePicker().visibleRangeText.end])).join(' - '));

	const { element, children = defaultChildren, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getRangeTextProps(), rest));
</script>

{#snippet defaultChildren()}
	{rangeText}
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
