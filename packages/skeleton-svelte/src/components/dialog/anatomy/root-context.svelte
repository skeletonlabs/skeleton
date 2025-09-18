<script lang="ts" module>
	import type { useDialog } from '../modules/use-dialog.svelte';
	import type { Snippet } from 'svelte';

	export interface DialogRootContextProps {
		children: Snippet<[ReturnType<typeof useDialog>]>;
	}
</script>

<script lang="ts">
	import { DialogRootContext } from '../modules/root-context';

	const props: DialogRootContextProps = $props();

	const dialog = DialogRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(dialog)}
