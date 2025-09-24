<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ToastDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ToastRootContext } from '../modules/root-context';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ToastDescriptionProps = $props();

	const toast = ToastRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			toast().getDescriptionProps(),
			{
				class: classesToast.description,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
