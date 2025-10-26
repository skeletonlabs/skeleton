<script lang="ts" module>
	import type { useToggleGroup } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface ToggleGroupRootContextProps {
		children: Snippet<[ReturnType<typeof useToggleGroup>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: ToggleGroupRootContextProps = $props();

	const toggleGroup = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(toggleGroup)}
