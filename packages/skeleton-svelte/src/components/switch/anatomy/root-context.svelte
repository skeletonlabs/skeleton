<script lang="ts" module>
	import type { useSwitch } from '../modules/use-switch.svelte';
	import type { Snippet } from 'svelte';

	export interface SwitchRootContextProps {
		children: Snippet<[ReturnType<typeof useSwitch>]>;
	}
</script>

<script lang="ts">
	import { SwitchRootContext } from '../modules/root-context';

	const props: SwitchRootContextProps = $props();

	const switch_ = SwitchRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(switch_)}
