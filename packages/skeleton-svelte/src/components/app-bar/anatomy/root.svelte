<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AppBarRootProps extends PropsWithElement<'header'>, HTMLAttributes<'header'> {}
</script>

<script lang="ts">
	import { classesAppBar } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: AppBarRootProps = $props();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(rest, {
			class: classesAppBar.root,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<header {...attributes}>
		{@render children?.()}
	</header>
{/if}
