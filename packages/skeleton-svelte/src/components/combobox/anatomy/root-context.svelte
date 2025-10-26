<script lang="ts" module>
	import type { useCombobox } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface ComboboxRootContextProps {
		children: Snippet<[ReturnType<typeof useCombobox>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: ComboboxRootContextProps = $props();

	const combobox = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(combobox)}
