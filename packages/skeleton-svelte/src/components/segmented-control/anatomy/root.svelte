<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/radio-group';

	export interface SegmentedControlRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useSegmentedControl } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/radio-group';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlRootProps = $props();

	const [segmentedControlProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const segmentedControl = useSegmentedControl(() => ({
		...segmentedControlProps,
		id: id,
	}));

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
