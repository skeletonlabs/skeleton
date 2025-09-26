<script lang="ts" module>
	import type { useProgressCircular } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface ProgressCircularRootContextProps {
		children: Snippet<[ReturnType<typeof useProgressCircular>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';

	const props: ProgressCircularRootContextProps = $props();

	const progressCircular = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(progressCircular)}
