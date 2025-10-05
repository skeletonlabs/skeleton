<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/listbox';

	export interface ListboxRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useListbox } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context';
	import { classesListbox } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/listbox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxRootProps = $props();
	const [listboxProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const listbox = useListbox(
		() =>
			({
				id: id,
				...listboxProps,
			}) as Props,
	);

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
