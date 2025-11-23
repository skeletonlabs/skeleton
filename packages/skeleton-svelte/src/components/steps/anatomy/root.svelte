<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/steps';

	export interface StepsRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useSteps } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { classesSteps } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/steps';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsRootProps = $props();

	const [stepsProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const steps = useSteps(() => ({
		...stepsProps,
		id: id,
	}));

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
