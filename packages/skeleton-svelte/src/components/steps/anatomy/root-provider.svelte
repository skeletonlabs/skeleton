<script lang="ts" module>
	import type { useSteps } from '../modules/provider.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface StepsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useSteps>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesSteps } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsRootProviderProps = $props();

	const { element, children, value: steps, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			steps().getRootProps(),
			{
				class: classesSteps.root,
			},
			rest,
		),
	);

	RootContext.provide(() => steps());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
