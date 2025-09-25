<script lang="ts" module>
	import type { useCombobox } from '../modules/use-combobox.svelte';
	import type { Snippet } from 'svelte';

	export interface ComboboxRootContextProps {
		children: Snippet<[ReturnType<typeof useCombobox>]>;
	}
</script>

<script lang="ts">
	import { ComboboxRootContext } from '../modules/root-context';

	const props: ComboboxRootContextProps = $props();

	const combobox = ComboboxRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(combobox)}
