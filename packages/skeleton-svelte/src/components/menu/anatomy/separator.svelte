<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface MenuSeparatorProps extends PropsWithElement<'hr'>, HTMLAttributes<'hr', 'id' | 'dir' | 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuSeparatorProps = $props();

	const menu = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(menu().getSeparatorProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<hr {...attributes} />
{/if}
