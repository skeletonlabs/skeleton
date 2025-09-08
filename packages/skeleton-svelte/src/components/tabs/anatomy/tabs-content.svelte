<script lang="ts" module>
	import type { ContentProps } from '@zag-js/tabs';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsContentProps extends ContentProps, PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/tabs-root-context';
	import { mergeProps } from '@zag-js/svelte';
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { splitContentProps } from '@zag-js/tabs';

	const props: TabsContentProps = $props();
	const rootContext = TabsRootContext.consume();
	const [contentProps, componentProps] = $derived(splitContentProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const attributes = $derived(mergeProps(rootContext.api.getContentProps(contentProps), { class: classesTabs.content }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
