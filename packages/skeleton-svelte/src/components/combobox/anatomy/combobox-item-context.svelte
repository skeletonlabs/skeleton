<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxItemContextType } from '../modules/combobox-item-context';

	export interface ComboboxItemContextProps {
		children: Snippet<[ComboboxItemContextType]>;
	}
</script>

<script lang="ts">
	import { ComboboxItemContext } from '../modules/combobox-item-context';

	const props: ComboboxItemContextProps = $props();
	const itemContext = ComboboxItemContext.consume();
</script>

{@render props.children(itemContext)}
