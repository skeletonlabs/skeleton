<script lang="ts" module>
	import type { useSegmentedControl } from '../modules/use-segmented-control.svelte';
	import type { Snippet } from 'svelte';

	export interface SegmentedControlRootContextProps {
		children: Snippet<[ReturnType<typeof useSegmentedControl>]>;
	}
</script>

<script lang="ts">
	import { SegmentedControlRootContext } from '../modules/root-context';

	const props: SegmentedControlRootContextProps = $props();

	const segmentedControl = SegmentedControlRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(segmentedControl)}
