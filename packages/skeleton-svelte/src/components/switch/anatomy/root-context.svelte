<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface SwitchRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { SwitchRootContext } from '../modules/root-context';
	import type { Api } from '@zag-js/switch';

	const props: SwitchRootContextProps = $props();

	const switch_ = SwitchRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(switch_)}
