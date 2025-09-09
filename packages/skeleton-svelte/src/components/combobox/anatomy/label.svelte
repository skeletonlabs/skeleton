<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	export interface ComboboxLabelProps extends PropsWithElement, HTMLLabelAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';

	const rootContext = ComboboxRootContext.consume();

	const props: ComboboxLabelProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getLabelProps(), { class: classesCombobox.label }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
