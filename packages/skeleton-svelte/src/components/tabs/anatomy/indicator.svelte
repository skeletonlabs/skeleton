<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TabsIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TabsIndicatorProps = $props();

	const tabs = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(tabs().getIndicatorProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}></div>
{/if}
