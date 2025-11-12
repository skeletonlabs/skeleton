<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { OptionItemProps as ZagOptionItemProps } from '@zag-js/menu';
	import type { Snippet } from 'svelte';

	export interface MenuOptionItemProps extends ZagOptionItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { splitOptionItemProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuOptionItemProps = $props();

	const menu = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitOptionItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			menu().getOptionItemProps(itemProps),
			{
				class: classesMenu.optionItem,
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
