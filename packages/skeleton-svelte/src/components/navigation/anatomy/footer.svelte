<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface NavigationFooterProps extends PropsWithElement<'footer'>, HTMLAttributes<'footer'> {}
</script>

<script lang="ts">
	import { NavigationRootContext } from '../modules/root-context';
	import { classesNavigation } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationFooterProps = $props();

	const navigation = NavigationRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-layout': navigation().layout,
				'data-compact': navigation().compact,
				class: classesNavigation.footer,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<footer {...attributes}>
		{@render children?.()}
	</footer>
{/if}
