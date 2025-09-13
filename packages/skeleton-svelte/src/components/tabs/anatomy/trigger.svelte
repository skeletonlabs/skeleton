<script lang="ts" module>
	import type { TriggerProps } from '@zag-js/tabs';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsTriggerProps extends TriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value' | 'disabled'> {}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { splitTriggerProps } from '@zag-js/tabs';

	const props: TabsTriggerProps = $props();

	const tabs = TabsRootContext.consume();

	const [triggerProps, componentProps] = $derived(splitTriggerProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(tabs().getTriggerProps(triggerProps), rest, {
			class: classesTabs.trigger
		})
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
