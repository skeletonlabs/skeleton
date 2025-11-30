<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface MenuIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuIndicatorProps = $props();

	const menu = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(menu().getIndicatorProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
