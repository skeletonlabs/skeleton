<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { TooltipRootContextType } from '../modules/tooltip-root-context';

	export interface TooltipRootContextProps {
		children: Snippet<[TooltipRootContextType]>;
	}
</script>

<script lang="ts">
	import { TooltipRootContext } from '../modules/tooltip-root-context';

	const props: TooltipRootContextProps = $props();
	const rootContext = TooltipRootContext.consume();
</script>

{@render props.children(rootContext)}
