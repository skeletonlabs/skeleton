<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Api, PropTypes } from '@zag-js/menu';
	import type { Snippet } from 'svelte';

	export interface MenuTriggerItemProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		/**
		 * The child menu API for the nested menu
		 */
		childMenu: Api<PropTypes>;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuTriggerItemProps = $props();

	const menu = RootContext.consume();

	const { element, children, childMenu, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			menu().getTriggerItemProps(childMenu),
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
