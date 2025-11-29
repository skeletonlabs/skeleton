<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { TriggerProps } from '@zag-js/tabs';

	export interface TabsTriggerProps extends TriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value' | 'disabled'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitTriggerProps } from '@zag-js/tabs';

	const props: TabsTriggerProps = $props();

	const tabs = RootContext.consume();

	const [triggerProps, componentProps] = $derived(splitTriggerProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(tabs().getTriggerProps(triggerProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
