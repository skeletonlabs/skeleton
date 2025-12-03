<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface SegmentedControlLabelProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlLabelProps = $props();

	const segmentedControl = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(segmentedControl().getLabelProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>{@render children?.()}</span>
{/if}
