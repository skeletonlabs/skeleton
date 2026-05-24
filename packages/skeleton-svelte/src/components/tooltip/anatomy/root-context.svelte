<script lang="ts" module>
	import type { useTooltip } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface TooltipRootContextProps {
		children: Snippet<[ReturnType<typeof useTooltip>]>;
	}
</script>

<script lang="ts">
	import { TooltipRootContext } from '../modules/root-context.js';

	const props: TooltipRootContextProps = $props();

	const tooltip = TooltipRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(tooltip)}
