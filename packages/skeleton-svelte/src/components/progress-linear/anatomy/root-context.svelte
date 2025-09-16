<script lang="ts" module>
	import type { useProgressLinear } from '../modules/use-progress-linear.svelte';
	import type { Snippet } from 'svelte';

	export interface ProgressLinearRootContextProps {
		children: Snippet<[ReturnType<typeof useProgressLinear>]>;
	}
</script>

<script lang="ts">
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearRootContextProps = $props();

	const progressLinear = ProgressLinearRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(progressLinear)}
