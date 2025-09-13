<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { TooltipRootContextType } from '../modules/root-context';

	export interface TooltipRootContextProps {
		children: Snippet<[TooltipRootContextType]>;
	}
</script>

<script lang="ts">
	import { TooltipRootContext } from '../modules/root-context';

	const props: TooltipRootContextProps = $props();

	const tooltip = TooltipRootContext.consume();
</script>

{@render props.children(tooltip)}
