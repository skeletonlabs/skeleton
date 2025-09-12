<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ComboboxInputProps extends PropsWithElement, HTMLAttributes<'input'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';

	const props: ComboboxInputProps = $props();

	const rootContext = ComboboxRootContext.consume();

	const { element, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getInputProps(), { class: classesCombobox.input }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<input {...attributes} />
{/if}
