<script lang="ts" module>
	import type { useListbox } from '../modules/provider.svelte';
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ListboxRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useListbox>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesListbox } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxRootProviderProps = $props();

	const { element, children, value: listbox, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			listbox().getRootProps(),
			{
				class: classesListbox.root,
			},
			rest,
		),
	);

	RootContext.provide(() => listbox());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
