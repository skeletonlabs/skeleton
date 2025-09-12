<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ProgressLinearTrackProps extends PropsWithElement, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearTrackProps = $props();

	const rootContext = ProgressLinearRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getTrackProps(), { class: classesProgressLinear.track }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
