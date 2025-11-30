<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface SegmentedControlItemHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlItemHiddenInputProps = $props();

	const segmentedcontrol = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(segmentedcontrol().getItemHiddenInputProps(itemProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
