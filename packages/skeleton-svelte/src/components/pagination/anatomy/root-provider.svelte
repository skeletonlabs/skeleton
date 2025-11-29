<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { usePagination } from '../modules/provider.svelte';

	export interface PaginationRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof usePagination>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationRootProviderProps = $props();

	const { element, children, value: pagination, ...rest } = $derived(props);

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
