<script lang="ts">
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import * as accordion from '@zag-js/accordion';
	import { accordionClasses } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext } from '../modules/context.js';
	import type { AccordionRootProps } from '../modules/types.js';

	const props: AccordionRootProps = $props();
	const [machineProps, componentProps] = $derived(accordion.splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(accordion.machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(accordion.connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: accordionClasses.root
			},
			restAttributes
		)
	);
	AccordionRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
