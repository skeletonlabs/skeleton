<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface SliderLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import * as classes from '@skeletonlabs/skeleton-common/classes';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderLabelProps = $props();

	const slider = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			slider().getLabelProps(),
			{
				class: classes.slider.label,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
