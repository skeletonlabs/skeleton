<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface AppBarRootProps extends PropsWithElement<'header'>, HTMLAttributes<'header'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: AppBarRootProps = $props();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-scope': 'app-bar',
				'data-part': 'root',
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<header {...attributes}>
		{@render children?.()}
	</header>
{/if}
