<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/rating-group';

	export interface RatingGroupRootProps
		extends PropsWithElement,
			Omit<Props, 'id'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { splitProps, machine, connect } from '@zag-js/rating-group';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/rating-group-root-context';

	const props: RatingGroupRootProps = $props();
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const [machineProps, componentProps] = $derived(splitProps(props));
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(machine, () => ({
		// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
		id: id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: classesRatingGroup.root
			},
			restAttributes
		)
	);
	RatingGroupRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
