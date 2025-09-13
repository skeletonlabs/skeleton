<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface TabsRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/root-context';
	import type { Api } from '@zag-js/tabs';

	const props: TabsRootContextProps = $props();

	const tabs = TabsRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(tabs)}
