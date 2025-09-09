<script lang="ts" module>
	import type { TriggerProps } from '@zag-js/tabs';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsTriggerProps extends TriggerProps, PropsWithElement, Omit<HTMLButtonAttributes, 'value' | 'disabled'> {}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { splitTriggerProps } from '@zag-js/tabs';

	const props: TabsTriggerProps = $props();

	const rootContext = TabsRootContext.consume();

	const [triggerProps, componentProps] = $derived(splitTriggerProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);

	const attributes = $derived(mergeProps(rootContext.api.getTriggerProps(triggerProps), { class: classesTabs.trigger }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
