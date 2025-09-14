<script lang="ts" module>
	import type { ContentProps } from '@zag-js/tabs';

	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsContentProps extends ContentProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { splitContentProps } from '@zag-js/tabs';

	import { TabsRootContext } from '../modules/root-context';

	const props: TabsContentProps = $props();

	const tabs = TabsRootContext.consume();

	const [contentProps, componentProps] = $derived(splitContentProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(tabs().getContentProps(contentProps), rest, {
			class: classesTabs.content,
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
