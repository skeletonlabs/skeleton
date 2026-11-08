<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ListboxContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ListboxRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxContentProps = $props();

	const listbox = ListboxRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(listbox().getContentProps(), rest));
	const listAttributes = $derived(listbox().getListProps());
</script>

<div {...attributes}>
	{#if element}
		{@render element(listAttributes)}
	{:else}
		<div {...listAttributes}>
			{@render children?.()}
		</div>
	{/if}
</div>
