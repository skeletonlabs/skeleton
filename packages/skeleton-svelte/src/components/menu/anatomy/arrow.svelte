<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Snippet } from 'svelte';

	export interface MenuArrowProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { MenuRootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuArrowProps = $props();

	const menu = MenuRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			menu().getArrowProps(),
			{
				class: classesMenu.arrow,
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
