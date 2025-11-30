<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ListboxContentProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxContentProps = $props();

	const listbox = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(listbox().getContentProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<ul {...attributes}>
		{@render children?.()}
	</ul>
{/if}
