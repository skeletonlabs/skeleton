<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface NavigationRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
		/**
		 * @default bar
		 * Set the preferred visual layout.
		 * */
		layout: 'bar' | 'rail' | 'sidebar';
	}
</script>

<script lang="ts">
	import { RootNavigationContext } from '../modules/root-context';
	import { classesNavigation } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationRootProps = $props();
	const { layout = 'bar', element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(rest, {
			'data-layout': layout,
			class: classesNavigation.root,
		}),
	);

	RootNavigationContext.provide(() => ({ layout }));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
