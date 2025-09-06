<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Props } from '@zag-js/tooltip';

	export interface TooltipRootProps
		extends PropsWithElement,
			Omit<Props, 'id'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir' | 'aria-label'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesTooltip } from '@skeletonlabs/skeleton-common';
	import { TooltipRootContext } from '../modules/tooltip-root-context.js';
	import { connect, machine, splitProps } from '@zag-js/tooltip';

	const props: TooltipRootProps = $props();
	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			{
				class: classesTooltip.root
			},
			restAttributes
		)
	);
	TooltipRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes: restAttributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
