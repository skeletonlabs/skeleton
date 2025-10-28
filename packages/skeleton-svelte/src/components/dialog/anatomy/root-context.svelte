<script lang="ts" module>
	import type { useDialog } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface DialogRootContextProps {
		children: Snippet<[ReturnType<typeof useDialog>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: DialogRootContextProps = $props();

	const dialog = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(dialog)}
