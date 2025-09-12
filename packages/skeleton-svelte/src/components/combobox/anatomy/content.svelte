<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ComboboxContentProps extends PropsWithElement, HTMLAttributes<'ul'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';

	const props: ComboboxContentProps = $props();

	const rootContext = ComboboxRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getContentProps(), { class: classesCombobox.content }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<ul {...attributes}>
		{@render children?.()}
	</ul>
{/if}
