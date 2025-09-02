<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { TabsRootContextType } from '../modules/tabs-root-context.js';

	export interface TabsRootContextProps {
		children: Snippet<[TabsRootContextType]>;
	}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/tabs-root-context.js';

	const props: TabsRootContextProps = $props();
	const rootContext = TabsRootContext.consume();
</script>

{@render props.children(rootContext)}
