<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	import type { useCombobox } from '../modules/use-combobox.svelte';

	export interface ComboboxRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'placeholder'> {
		value: ReturnType<typeof useCombobox>;
	}
</script>

<script lang="ts">
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { ComboboxRootContext } from '../modules/root-context';

	const props: ComboboxRootProviderProps = $props();
	const { element, children, value: combobox, ...rest } = $derived(props);

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
