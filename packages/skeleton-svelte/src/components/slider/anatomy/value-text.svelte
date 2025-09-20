<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SliderValueTextProps extends PropsWithElement<'output'>, HTMLAttributes<'output'> {}
</script>

<script lang="ts">
	import { SliderRootContext } from '../modules/root-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderValueTextProps = $props();

	const slider = SliderRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(slider().getValueTextProps(), rest, {
			class: classesSlider.valueText,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<output {...attributes}>
		{@render children?.()}
	</output>
{/if}
