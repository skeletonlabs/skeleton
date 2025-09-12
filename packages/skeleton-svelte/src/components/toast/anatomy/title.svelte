<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ToastTitleProps extends PropsWithElement, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { ToastRootContext } from '../modules/root-context';

	const props: ToastTitleProps = $props();

	const rootContext = ToastRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getTitleProps(), { class: classesToast.title }, rest));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
