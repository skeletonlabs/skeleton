<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Props } from '@zag-js/tree-view';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TreeViewRootProps
		extends PropsWithElement,
			Omit<Props, 'id'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}
</script>

<script lang="ts">
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { machine, connect, splitProps } from '@zag-js/tree-view';

	const props: TreeViewRootProps = $props();
	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps,
	}));
	const api = $derived(connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: classesTreeview.root,
			},
			restAttributes,
		),
	);

	TreeViewRootContext.provide({
		get api() {
			return api;
		},
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
