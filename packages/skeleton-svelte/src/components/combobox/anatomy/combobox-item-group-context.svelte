<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxItemGroupContextType } from '../modules/combobox-item-group-context';

	export interface ComboboxItemGroupContextProps {
		children: Snippet<[ComboboxItemGroupContextType]>;
	}
</script>

<script lang="ts">
	import { ComboboxItemGroupContext } from '../modules/combobox-item-group-context';

	const props: ComboboxItemGroupContextProps = $props();
	const itemgroupContext = ComboboxItemGroupContext.consume();
</script>

{@render props.children(itemgroupContext)}
