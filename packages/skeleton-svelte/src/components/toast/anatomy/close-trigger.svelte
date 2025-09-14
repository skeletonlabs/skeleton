<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ToastCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { ToastRootContext } from '../modules/root-context';
	import X from '@/internal/components/x.svelte';

	const props: ToastCloseTriggerProps = $props();

	const toast = ToastRootContext.consume();

	const { element, children = x, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(toast().getCloseTriggerProps(), rest, {
			class: classesToast.closeTrigger,
		}),
	);
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
