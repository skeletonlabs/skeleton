<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ToastCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import X from '../../../internal/components/x.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ToastCloseTriggerProps = $props();

	const toast = RootContext.consume();

	const { element, children = x, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(toast().getCloseTriggerProps(), rest));
</script>

{#snippet x()}
	<X />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
