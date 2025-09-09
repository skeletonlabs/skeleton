<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { TabsRootContextType } from '../modules/root-context';

	export interface TabsRootContextProps {
		children: Snippet<[TabsRootContextType]>;
	}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/root-context';

	const props: TabsRootContextProps = $props();

	const rootContext = TabsRootContext.consume();
</script>

{@render props.children(rootContext)}
