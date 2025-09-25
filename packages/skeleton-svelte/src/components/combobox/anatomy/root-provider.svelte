<script lang="ts" module>
	import type { useCombobox } from '../modules/use-combobox.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ComboboxRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'placeholder'> {
		value: ReturnType<typeof useCombobox>;
	}
</script>

<script lang="ts">
	import { ComboboxRootContext } from '../modules/root-context';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxRootProviderProps = $props();
	const { element, children, value: combobox, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			combobox().getRootProps(),
			{
				class: classesCombobox.root,
			},
			rest,
		),
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
