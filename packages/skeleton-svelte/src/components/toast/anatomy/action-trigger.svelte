<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ToastActionTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { ToastRootContext } from '../modules/root-context';

	const props: ToastActionTriggerProps = $props();

	const toast = ToastRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(toast().getActionTriggerProps(), rest, {
			class: classesToast.actionTrigger,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
