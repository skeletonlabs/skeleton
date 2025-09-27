<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface NavigationRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
		/**
		 * Sets the data-layout attribute, which modifies the visual presentation of the component set.
		 *
		 * @default bar
		 * */
		layout?: 'bar' | 'rail' | 'sidebar';
		/**
		 * Sets the data-compacted attribute, which toggles the Sidebar compacted mode.
		 *
		 * @default false
		 * */
		compact?: boolean;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesNavigation } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationRootProps = $props();
	const { layout = 'bar', compact = false, element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-layout': layout,
				'data-compact': compact,
				class: classesNavigation.root,
			},
			rest,
		),
	);

	RootContext.provide(() => ({ layout, compact }));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
