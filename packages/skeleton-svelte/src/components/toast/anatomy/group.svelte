<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Store, Props } from '@zag-js/toast';

	export interface ToastGroupProps extends PropsWithElement, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir' | 'children'> {
		toaster: Store;
		children?: Snippet<[Props]>;
	}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { ToastGroupContext } from '../modules/group-context';
	import { group } from '@zag-js/toast';
	import type { Snippet } from 'svelte';

	const props: ToastGroupProps = $props();

	const { element, children, toaster, ...restAttributes } = $derived(props);

	const id = $props.id();
	const service = useMachine(group.machine, () => ({
		id: id,
		store: toaster
	}));
	const api = $derived(group.connect(service, normalizeProps));

	const attributes = $derived(mergeProps(api.getGroupProps(), { class: classesToast.group }, restAttributes));

	ToastGroupContext.provide({
		get groupApi() {
			return api;
		},
		get groupService() {
			return service;
		}
	});
</script>

{#if element}
	{@render element({ attributes: restAttributes })}
{:else}
	<div {...attributes}>
		{#each api.getToasts() as toast (toast.id)}
			{@render children?.(toast)}
		{/each}
	</div>
{/if}
