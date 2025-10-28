<script lang="ts" module>
	import type { usePagination } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface PaginationRootContextProps {
		children: Snippet<[ReturnType<typeof usePagination>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: PaginationRootContextProps = $props();

	const pagination = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(pagination)}
