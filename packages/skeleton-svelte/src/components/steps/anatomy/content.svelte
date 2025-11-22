<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/steps';

	export interface StepsContentProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesSteps } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsContentProps = $props();

	const steps = RootContext.consume();

	const { index, ...componentProps } = $derived(props);
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			steps().getContentProps({ index }),
			{
				class: classesSteps.content,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
