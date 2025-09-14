<script lang="ts" module>
	import type { Props } from '@zag-js/tabs';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { splitProps } from '@zag-js/tabs';
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { TabsRootContext } from '../modules/root-context';
	import { useTabs } from '../modules/use-tabs.svelte';

	const props: TabsRootProps = $props();
	const [tabsProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const tabs = useTabs(() => ({
		id: id,
		...tabsProps,
	}));

	const attributes = $derived(
		mergeProps(tabs().getRootProps(), rest, {
			class: classesTabs.root,
		}),
	);

	TabsRootContext.provide(() => tabs());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
