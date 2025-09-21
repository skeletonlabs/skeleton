<script lang="ts" module>
	import type { usePagination } from '../modules/use-pagination.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface PaginationRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof usePagination>;
	}
</script>

<script lang="ts">
	import { PaginationRootContext } from '../modules/root-context';
	import { classesPagination } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationRootProviderProps = $props();

	const { element, children, value: pagination, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(pagination().getRootProps(), rest, {
			class: classesPagination.root,
		}),
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
