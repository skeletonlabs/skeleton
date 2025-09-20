<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SliderHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { SliderRootContext } from '../modules/root-context';
	import { SliderThumbContext } from '../modules/thumb-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderHiddenInputProps = $props();

	const slider = SliderRootContext.consume();
	const thumbProps = SliderThumbContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(slider().getHiddenInputProps(thumbProps()), rest, {
			class: classesSlider.hiddenInput,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
