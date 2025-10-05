<script lang="ts" module>
	import type { useListbox } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface ListboxRootContextProps {
		children: Snippet<[ReturnType<typeof useListbox>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';

	const props: ListboxRootContextProps = $props();

	const listbox = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(listbox)}
