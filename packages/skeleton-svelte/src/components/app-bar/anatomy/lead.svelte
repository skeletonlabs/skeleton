<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AppBarLeadProps extends PropsWithElement<'nav'>, HTMLAttributes<'nav'> {}
</script>

<script lang="ts">
	import { classesAppBar } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: AppBarLeadProps = $props();
	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(rest, {
			class: classesAppBar.lead,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<nav {...attributes}>
		{@render children?.()}
	</nav>
{/if}
