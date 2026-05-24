<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';

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
	import { NavigationRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationRootProps = $props();

	const locale = LocaleProviderRootContext.consume();

	const { layout = 'bar', element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				dir: locale().dir,
				'data-scope': 'navigation',
				'data-part': 'root',
				'data-layout': layout,
			},
			rest,
		),
	);

	NavigationRootContext.provide(() => ({ layout }));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
