<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Props } from '@zag-js/popover';

	export interface PopoverRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/popover-root-context';
	import { connect, machine, splitProps } from '@zag-js/popover';

	const props: PopoverRootProps = $props();
	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));
	const attributes = $derived(mergeProps({ class: classesPopover.root }, restAttributes));
	PopoverRootContext.provide({
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
