<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/progress';

	export interface ProgressLinearRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { splitProps, machine, connect } from '@zag-js/progress';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearRootProps = $props();

	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);

	const id = $props.id();
	const service = useMachine(machine, () => ({
		id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));

	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: classesProgressLinear.root
			},
			restAttributes
		)
	);

	ProgressLinearRootContext.provide({
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
