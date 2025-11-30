<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface NavigationFooterProps extends PropsWithElement<'footer'>, HTMLAttributes<'footer'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationFooterProps = $props();

	const navigation = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-scope': 'navigation',
				'data-part': 'footer',
				'data-layout': navigation().layout,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<footer {...attributes}>
		{@render children?.()}
	</footer>
{/if}
