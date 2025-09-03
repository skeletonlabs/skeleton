<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Props } from '@zag-js/avatar';

	export interface AvatarRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { AvatarRootContext } from '../modules/avatar-root-context.js';
	import { connect, machine, splitProps } from '@zag-js/avatar';

	const props: AvatarRootProps = $props();
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
			api.getRootProps(),
			{
				class: classesAvatar.root
			},
			restAttributes
		)
	);
	AvatarRootContext.provide({
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
