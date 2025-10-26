<script lang="ts" module>
	import type { useCollapsible } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface CollapsibleRootContextProps {
		children: Snippet<[ReturnType<typeof useCollapsible>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: CollapsibleRootContextProps = $props();

	const collapsible = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(collapsible)}
