<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ProgressCircularValueTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressCircularValueTextProps = $props();

	const progressCircular = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			progressCircular().getValueTextProps(),
			{
				class: classesProgressCircular.valueText,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{#if children}
			{@render children?.()}
		{:else}
			{progressCircular().valueAsString}
		{/if}
	</span>
{/if}
