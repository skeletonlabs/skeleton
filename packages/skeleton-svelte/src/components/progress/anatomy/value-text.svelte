<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ProgressValueTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressValueTextProps = $props();

	const progress = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(progress().getValueTextProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{#if children}
			{@render children?.()}
		{:else}
			{progress().percentAsString}
		{/if}
	</span>
{/if}
