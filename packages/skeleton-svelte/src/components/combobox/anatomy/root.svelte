<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/combobox';

	export interface ComboboxRootProps
		extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'placeholder'> {}
</script>

<script lang="ts">
	import { useCombobox } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/combobox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxRootProps = $props();
	const [comboboxProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const combobox = useCombobox(() => ({
		...comboboxProps,
		id: id,
	}));

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
