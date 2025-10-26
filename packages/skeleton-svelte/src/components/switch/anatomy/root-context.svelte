<script lang="ts" module>
	import type { useSwitch } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface SwitchRootContextProps {
		children: Snippet<[ReturnType<typeof useSwitch>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: SwitchRootContextProps = $props();

	const switch_ = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(switch_)}
