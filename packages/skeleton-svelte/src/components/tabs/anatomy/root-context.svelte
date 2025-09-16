<script lang="ts" module>
	import type { useTabs } from '../modules/use-tabs.svelte';
	import type { Snippet } from 'svelte';

	export interface TabsRootContextProps {
		children: Snippet<[ReturnType<typeof useTabs>]>;
	}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/root-context';

	const props: TabsRootContextProps = $props();

	const tabs = TabsRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(tabs)}
