<script lang="ts" module>
	import type { useMenu } from '../modules/provider.svelte.js';
	import type { Snippet } from 'svelte';

	export interface MenuRootContextProps {
		children: Snippet<[ReturnType<typeof useMenu>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: MenuRootContextProps = $props();

	const menu = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(menu)}
