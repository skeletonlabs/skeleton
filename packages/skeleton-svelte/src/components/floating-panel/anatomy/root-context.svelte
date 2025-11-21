<script lang="ts" module>
	import type { useFloatingPanel } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface FloatingPanelRootContextProps {
		children: Snippet<[ReturnType<typeof useFloatingPanel>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: FloatingPanelRootContextProps = $props();

	const floatingPanel = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(floatingPanel)}
