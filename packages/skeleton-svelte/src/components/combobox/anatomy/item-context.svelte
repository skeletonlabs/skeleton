<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxItemContextType } from '../modules/item-context';

	export interface ComboboxItemContextProps {
		children: Snippet<[ComboboxItemContextType]>;
	}
</script>

<script lang="ts">
	import { ComboboxItemContext } from '../modules/item-context';

	const itemContext = ComboboxItemContext.consume();

	const props: ComboboxItemContextProps = $props();
</script>

{@render props.children(itemContext)}
