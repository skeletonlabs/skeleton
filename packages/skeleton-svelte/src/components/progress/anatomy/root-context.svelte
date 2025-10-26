<script lang="ts" module>
	import type { useProgress } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface ProgressRootContextProps {
		children: Snippet<[ReturnType<typeof useProgress>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: ProgressRootContextProps = $props();

	const progress = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(progress)}
