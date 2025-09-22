<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AppBarToolbarProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
		children: Snippet;
	}
</script>

<script lang="ts">
	import { classesAppBar } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import type { Snippet } from 'svelte';

	const { element, children, ...rest }: AppBarToolbarProps = $props();

	const attributes = $derived(
		mergeProps(rest, {
			class: classesAppBar.toolbar,
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
