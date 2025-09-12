<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface RatingGroupControlProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'defaultValue' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/root-context';

	const props: RatingGroupControlProps = $props();

	const rootContext = RatingGroupRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getControlProps(), { class: classesRatingGroup.control }, rest));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>{@render children?.()}</div>
{/if}
