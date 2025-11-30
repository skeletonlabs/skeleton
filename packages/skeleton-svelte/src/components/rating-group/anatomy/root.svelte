<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/rating-group';

	export interface RatingGroupRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useRatingGroup } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/rating-group';
	import { mergeProps } from '@zag-js/svelte';

	const props: RatingGroupRootProps = $props();

	const [ratingGroupProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const ratingGroup = useRatingGroup(() => ({
		...ratingGroupProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(ratingGroup().getRootProps(), rest));

	RootContext.provide(() => ratingGroup());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
