<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ContentProps } from '@zag-js/tabs';

	export interface TabsContentProps extends ContentProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitContentProps } from '@zag-js/tabs';

	const props: TabsContentProps = $props();

	const tabs = RootContext.consume();

	const [contentProps, componentProps] = $derived(splitContentProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(tabs().getContentProps(contentProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
