<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/pagination';

	export interface PaginationRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { PaginationRootContext } from '../modules/root-context';
	import { usePagination } from '../modules/use-pagination.svelte';
	import { classesPagination } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/pagination';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationRootProps = $props();

	const [paginationProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const pagination = usePagination(() => ({
		id: id,
		...paginationProps,
	}));

	const attributes = $derived(
		mergeProps(
			pagination().getRootProps(),
			{
				class: classesPagination.root,
			},
			rest,
		),
	);

	PaginationRootContext.provide(() => pagination());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
