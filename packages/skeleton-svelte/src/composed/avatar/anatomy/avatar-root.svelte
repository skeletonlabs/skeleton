<script lang="ts">
	import * as avatar from '@zag-js/avatar';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context.js';
	import type { AvatarRootProps } from '../modules/types.js';

	const props: AvatarRootProps = $props();
	const [machineProps, componentProps] = $derived(avatar.splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(avatar.machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(avatar.connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: 'skb:isolate skb:bg-surface-400-600 skb:size-16 skb:rounded-full skb:overflow-hidden'
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
