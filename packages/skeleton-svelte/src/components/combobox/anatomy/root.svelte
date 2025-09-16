<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/combobox';

	export interface ComboboxRootProps
		extends Omit<Props, 'id'>,
			PropsWithElement<'div'>,
			HTMLAttributes<'div', 'id' | 'dir' | 'placeholder'> {}
</script>

<script lang="ts">
	import { ComboboxRootContext } from '../modules/root-context';
	import { useCombobox } from '../modules/use-combobox.svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/combobox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxRootProps = $props();
	const [comboboxProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const combobox = useCombobox(() => ({
		id: id,
		...comboboxProps,
	}));

	const attributes = $derived(
		mergeProps(combobox().getRootProps(), rest, {
			class: classesCombobox.root,
		}),
	);

	ComboboxRootContext.provide(() => combobox());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
