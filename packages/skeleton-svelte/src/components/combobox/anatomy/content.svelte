<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ComboboxContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ComboboxRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxContentProps = $props();

	const combobox = ComboboxRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(combobox().getContentProps(), rest));
	const listAttributes = $derived(combobox().getListProps());
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
