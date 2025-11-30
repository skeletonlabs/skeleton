<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface SliderValueTextProps extends PropsWithElement<'output'>, HTMLAttributes<'output'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderValueTextProps = $props();

	const slider = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(slider().getValueTextProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<output {...attributes}>
		{@render children?.()}
	</output>
{/if}
