<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface StepsTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button', 'value' | 'disabled'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsTriggerProps = $props();

	const steps = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(steps().getTriggerProps(itemProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
