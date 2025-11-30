<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/pagination';

	export interface PaginationRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { usePagination } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/pagination';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationRootProps = $props();

	const [paginationProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const pagination = usePagination(() => ({
		...paginationProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(pagination().getRootProps(), rest));

	RootContext.provide(() => pagination());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
