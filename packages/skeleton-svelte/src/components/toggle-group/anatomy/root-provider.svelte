<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useToggleGroup } from '../modules/provider.svelte';

	export interface ToggleGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useToggleGroup>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ToggleGroupRootProviderProps = $props();

	const { element, children, value: toggleGroup, ...rest } = $derived(props);

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
