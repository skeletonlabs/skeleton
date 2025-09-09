<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxRootContextType } from '../modules/root-context';

	export interface ComboboxRootContextProps {
		children: Snippet<[ComboboxRootContextType]>;
	}
</script>

<script lang="ts">
	import { ComboboxRootContext } from '../modules/root-context';

	const props: ComboboxRootContextProps = $props();
	const rootContext = ComboboxRootContext.consume();
</script>

{@render props.children(rootContext)}
