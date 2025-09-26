<script lang="ts" module>
	import type { useProgressLinear } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface ProgressLinearRootContextProps {
		children: Snippet<[ReturnType<typeof useProgressLinear>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';

	const props: ProgressLinearRootContextProps = $props();

	const progressLinear = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(progressLinear)}
