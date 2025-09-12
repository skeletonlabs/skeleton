<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface RatingGroupLabelProps extends PropsWithElement, Omit<HTMLAttributes<'label'>, 'id' | 'defaultValue' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/root-context';

	const props: RatingGroupLabelProps = $props();

	const rootContext = RatingGroupRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getControlProps(), { class: classesRatingGroup.label }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<label {...attributes}>{@render children?.()}</label>
{/if}
