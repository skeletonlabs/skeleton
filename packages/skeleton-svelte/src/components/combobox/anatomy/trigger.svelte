<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ComboboxTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import ChevronDownIcon from '../../../internal/components/chevron-down.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxTriggerProps = $props();

	const combobox = RootContext.consume();

	const { element, children = chevronDown, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(combobox().getTriggerProps(), rest));
</script>

{#snippet chevronDown()}
	<ChevronDownIcon />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
