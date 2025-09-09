<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxRootContextType } from '../modules/root-context';

	export interface ComboboxRootContextProps {
		children: Snippet<[ComboboxRootContextType]>;
	}
</script>

<script lang="ts">
	import { ComboboxRootContext } from '../modules/root-context';

	const rootContext = ComboboxRootContext.consume();

	const props: ComboboxRootContextProps = $props();
</script>

{@render props.children(rootContext)}
