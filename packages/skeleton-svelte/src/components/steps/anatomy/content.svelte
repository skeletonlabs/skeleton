<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/steps';

	export interface StepsContentProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsContentProps = $props();

	const steps = RootContext.consume();

	// @zag-js/steps does not currently provide a splitItemProps function, so manually destructure
	const { element, children, index, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(steps().getContentProps({ index }), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
