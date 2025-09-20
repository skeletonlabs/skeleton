<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SliderLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}
</script>

<script lang="ts">
	import { SliderRootContext } from '../modules/root-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderLabelProps = $props();

	const slider = SliderRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(slider().getLabelProps(), rest, {
			class: classesSlider.label,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
