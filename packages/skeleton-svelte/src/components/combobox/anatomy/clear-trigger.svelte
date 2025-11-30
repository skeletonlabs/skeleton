<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ComboboxClearTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxClearTriggerProps = $props();

	const combobox = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(combobox().getClearTriggerProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
