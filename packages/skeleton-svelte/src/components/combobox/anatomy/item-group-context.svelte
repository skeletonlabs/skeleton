<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxItemGroupContextType } from '../modules/item-group-context';

	export interface ComboboxItemGroupContextProps {
		children: Snippet<[ComboboxItemGroupContextType]>;
	}
</script>

<script lang="ts">
	import { ComboboxItemGroupContext } from '../modules/item-group-context';

	const itemgroupContext = ComboboxItemGroupContext.consume();

	const props: ComboboxItemGroupContextProps = $props();
</script>

{@render props.children(itemgroupContext)}
