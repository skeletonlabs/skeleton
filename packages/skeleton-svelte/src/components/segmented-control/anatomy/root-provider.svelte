<script lang="ts" module>
	import type { useSegmentedControl } from '../modules/use-segmented-control.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SegmentedControlRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useSegmentedControl>;
	}
</script>

<script lang="ts">
	import { SegmentedControlRootContext } from '../modules/root-context';
	import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlRootProviderProps = $props();

	const { element, children, value: segmentedControl, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(segmentedControl().getRootProps(), rest, {
			class: classesSegmentedControl.root,
		}),
	);

	SegmentedControlRootContext.provide(() => segmentedControl());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
