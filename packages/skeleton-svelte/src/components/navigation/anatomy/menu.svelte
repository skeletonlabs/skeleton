<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface NavigationMenuProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootNavigationContext } from '../modules/root-context';
	import { classesNavigation } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationMenuProps = $props();
	const { element, children, ...rest } = $derived(props);

	const navigation = RootNavigationContext.consume();

	const attributes = $derived(
		mergeProps(rest, {
			'data-layout': navigation().layout,
			class: classesNavigation.menu,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
