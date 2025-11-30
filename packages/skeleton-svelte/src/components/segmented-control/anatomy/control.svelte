<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface SegmentedControlControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlControlProps = $props();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-scope': 'radio-group',
				'data-part': 'control',
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
