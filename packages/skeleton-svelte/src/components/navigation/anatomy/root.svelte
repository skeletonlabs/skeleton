<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface NavigationRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
		/**
		 * Sets the data-layout attribute, which modifies the visual presentation of the component set.
		 *
		 * @default bar
		 * */
		layout?: 'bar' | 'rail' | 'sidebar';
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationRootProps = $props();
	const { layout = 'bar', element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-scope': 'navigation',
				'data-part': 'root',
				'data-layout': layout,
			},
			rest,
		),
	);

	RootContext.provide(() => ({ layout }));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
