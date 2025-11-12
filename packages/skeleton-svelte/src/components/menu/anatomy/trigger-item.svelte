<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { TriggerItemProps as ZagTriggerItemProps } from '@zag-js/menu';
	import type { Snippet } from 'svelte';

	export interface MenuTriggerItemProps extends ZagTriggerItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { MenuRootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { splitTriggerItemProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuTriggerItemProps = $props();

	const menu = MenuRootContext.consume();

	const [itemProps, componentProps] = $derived(splitTriggerItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			menu().getTriggerItemProps(itemProps),
			{
				class: classesMenu.triggerItem,
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
