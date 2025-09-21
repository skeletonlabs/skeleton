<script lang="ts" module>
	import type { usePagination } from '../modules/use-pagination.svelte';
	import type { Snippet } from 'svelte';

	export interface PaginationRootContextProps {
		children: Snippet<[ReturnType<typeof usePagination>]>;
	}
</script>

<script lang="ts">
	import { PaginationRootContext } from '../modules/root-context';

	const props: PaginationRootContextProps = $props();

	const pagination = PaginationRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(pagination)}
