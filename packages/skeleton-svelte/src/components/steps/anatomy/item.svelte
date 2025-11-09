<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/steps';

	export interface StepsItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { classesSteps } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsItemProps = $props();

	const tabs = RootContext.consume();

	const { index, ...componentProps } = $derived(props);
	const itemProps = $derived({ index });
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			tabs().getItemProps({ index }),
			{
				class: classesSteps.item,
			},
			rest,
		),
	);

	ItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
