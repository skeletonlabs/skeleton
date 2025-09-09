<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface ComboboxTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';

	const props: ComboboxTriggerProps = $props();

	const rootContext = ComboboxRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getTriggerProps(), { class: classesCombobox.trigger }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
