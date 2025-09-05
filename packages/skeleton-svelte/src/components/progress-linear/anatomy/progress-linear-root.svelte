<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Props } from '@zag-js/avatar';

	export interface ProgressLinearRootProps
		extends PropsWithElement,
			Omit<Props, 'id'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {} // REVIEWER: is `dir` needed?
</script>

<script lang="ts">
	import * as progress from '@zag-js/progress';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';

	import { ProgressLinearRootContext } from '../modules/progress-linear-root-context.js';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';

	// Props
	const props: ProgressLinearRootProps = $props();
	const [machineProps, componentProps] = $derived(progress.splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();

	// Zag
	const service = useMachine(progress.machine, () => ({
		id,
		...machineProps
	}));
	const api = $derived(progress.connect(service, normalizeProps));

	// Attributes
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: classesProgressLinear.root
			},
			restAttributes
		)
	);

	// Context
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
