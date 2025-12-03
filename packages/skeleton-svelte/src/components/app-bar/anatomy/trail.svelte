<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface AppBarTrailProps extends PropsWithElement<'nav'>, HTMLAttributes<'nav'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: AppBarTrailProps = $props();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-scope': 'app-bar',
				'data-part': 'trail',
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<nav {...attributes}>
		{@render children?.()}
	</nav>
{/if}
