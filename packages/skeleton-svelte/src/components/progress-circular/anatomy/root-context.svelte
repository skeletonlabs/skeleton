<script lang="ts" module>
	import type { useProgressCircular } from '../modules/use-progress-circular.svelte';
	import type { Snippet } from 'svelte';

	export interface ProgressCircularRootContextProps {
		children: Snippet<[ReturnType<typeof useProgressCircular>]>;
	}
</script>

<script lang="ts">
	import { ProgressCircularRootContext } from '../modules/root-context';

	const props: ProgressCircularRootContextProps = $props();

	const progressCircular = ProgressCircularRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(progressCircular)}
