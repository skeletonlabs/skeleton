<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { DialogRootContextType } from '../modules/root-context';

	export interface DialogRootContextProps {
		children: Snippet<[DialogRootContextType]>;
	}
</script>

<script lang="ts">
	import { DialogRootContext } from '../modules/root-context';

	const props: DialogRootContextProps = $props();

	const rootContext = DialogRootContext.consume();
</script>

{@render props.children(rootContext)}
