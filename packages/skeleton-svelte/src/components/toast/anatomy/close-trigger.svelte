<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ToastCloseTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { ToastRootContext } from '../modules/root-context';
	import X from '@/internal/components/x.svelte';

	const props: ToastCloseTriggerProps = $props();

	const rootContext = ToastRootContext.consume();

	const { element, children = x, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getCloseTriggerProps(), { class: classesToast.closeTrigger }, restAttributes));
</script>

{#snippet x()}
	<X />
{/snippet}

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
