<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useCombobox } from '../modules/provider.svelte';

	export interface ComboboxRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'placeholder'> {
		value: ReturnType<typeof useCombobox>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxRootProviderProps = $props();

	const { element, children, value: combobox, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(combobox().getRootProps(), rest));

	RootContext.provide(() => combobox());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
