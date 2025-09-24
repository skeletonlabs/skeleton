<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import { splitItemProps, type ItemProps } from '@zag-js/pagination';

	export interface PaginationItemProps extends ItemProps, PropsWithElement<'a'>, HTMLAttributes<'a', 'type'> {}
</script>

<script lang="ts">
	import { PaginationRootContext } from '../modules/root-context';
	import { classesPagination } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationItemProps = $props();

	const pagination = PaginationRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			pagination().getItemProps(itemProps),
			{
				class: classesPagination.item,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<a {...attributes}>
		{@render children?.()}
	</a>
{/if}
