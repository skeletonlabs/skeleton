<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Snippet } from 'svelte';

	export interface MenuSeparatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuSeparatorProps = $props();

	const menu = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			menu().getSeparatorProps(),
			{
				class: classesMenu.separator,
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
