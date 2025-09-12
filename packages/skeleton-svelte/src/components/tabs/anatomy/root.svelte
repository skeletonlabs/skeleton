<script lang="ts" module>
	import type { Props } from '@zag-js/tabs';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsRootProps extends Omit<Props, 'id'>, PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'defaultValue' | 'dir'> {}
</script>

<script lang="ts">
	import { connect, machine, splitProps } from '@zag-js/tabs';
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { TabsRootContext } from '../modules/root-context';

	const props: TabsRootProps = $props();
	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));

	const attributes = $derived(mergeProps(api.getRootProps(), { class: classesTabs.root }, rest));

	TabsRootContext.provide({
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
