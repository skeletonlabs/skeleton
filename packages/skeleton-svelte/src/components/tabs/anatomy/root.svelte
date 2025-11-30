<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/tabs';

	export interface TabsRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useTabs } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/tabs';

	const props: TabsRootProps = $props();
	const [tabsProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const tabs = useTabs(() => ({
		...tabsProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(tabs().getRootProps(), rest));

	RootContext.provide(() => tabs());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
