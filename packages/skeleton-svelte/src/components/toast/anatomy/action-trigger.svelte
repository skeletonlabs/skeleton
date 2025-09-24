<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ToastActionTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { ToastRootContext } from '../modules/root-context';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ToastActionTriggerProps = $props();

	const toast = ToastRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			toast().getActionTriggerProps(),
			{
				class: classesToast.actionTrigger,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
