<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface NavigationTriggerTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: NavigationTriggerTextProps = $props();

	const navigation = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				'data-scope': 'navigation',
				'data-part': 'trigger-text',
				'data-layout': navigation().layout,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
