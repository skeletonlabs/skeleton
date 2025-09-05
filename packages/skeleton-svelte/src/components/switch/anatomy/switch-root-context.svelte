<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { SwitchRootContextType } from '../modules/switch-root-context';

	export interface SwitchRootContextProps {
		children: Snippet<[SwitchRootContextType]>;
	}
</script>

<script lang="ts">
	import { SwitchRootContext } from '../modules/switch-root-context';

	const props: SwitchRootContextProps = $props();
	const rootContext = SwitchRootContext.consume();
</script>

{@render props.children(rootContext)}
