<script lang="ts" module>
	import type { useSegmentedControl } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface SegmentedControlRootContextProps {
		children: Snippet<[ReturnType<typeof useSegmentedControl>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: SegmentedControlRootContextProps = $props();

	const segmentedControl = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(segmentedControl)}
