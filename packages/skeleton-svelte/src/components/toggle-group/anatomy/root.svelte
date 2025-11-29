<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/toggle-group';

	export interface ToggleGroupRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useToggleGroup } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/toggle-group';

	const props: ToggleGroupRootProps = $props();

	const [toggleGroupProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const toggleGroup = useToggleGroup(() => ({
		...toggleGroupProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(toggleGroup().getRootProps(), rest));

	RootContext.provide(() => toggleGroup());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
