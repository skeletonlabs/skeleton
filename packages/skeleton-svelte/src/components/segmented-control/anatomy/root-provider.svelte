<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useSegmentedControl } from '../modules/provider.svelte';

	export interface SegmentedControlRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useSegmentedControl>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlRootProviderProps = $props();

	const { element, children, value: segmentedControl, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(segmentedControl().getRootProps(), rest));

	RootContext.provide(() => segmentedControl());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
