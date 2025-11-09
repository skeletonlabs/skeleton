<script lang="ts" module>
	import type { useSteps } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface StepsRootContextProps {
		children: Snippet<[ReturnType<typeof useSteps>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: StepsRootContextProps = $props();

	const steps = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(steps)}
