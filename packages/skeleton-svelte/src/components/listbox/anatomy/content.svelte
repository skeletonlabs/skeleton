<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ListboxContentProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesListbox } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxContentProps = $props();

	const listbox = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			listbox().getContentProps(),
			{
				class: classesListbox.content,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<ul {...attributes}>
		{@render children?.()}
	</ul>
{/if}
