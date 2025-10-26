<script lang="ts" module>
	import type { useTabs } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface TabsRootContextProps {
		children: Snippet<[ReturnType<typeof useTabs>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: TabsRootContextProps = $props();

	const tabs = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(tabs)}
