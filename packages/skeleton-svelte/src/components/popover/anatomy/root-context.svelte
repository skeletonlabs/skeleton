<script lang="ts" module>
	import type { usePopover } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface PopoverRootContextProps {
		children: Snippet<[ReturnType<typeof usePopover>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: PopoverRootContextProps = $props();

	const popover = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(popover)}
