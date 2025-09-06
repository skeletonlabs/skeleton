<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { PopoverRootContextType } from '../modules/popover-root-context';

	export interface PopoverRootContextProps {
		children: Snippet<[PopoverRootContextType]>;
	}
</script>

<script lang="ts">
	import { PopoverRootContext } from '../modules/popover-root-context';

	const props: PopoverRootContextProps = $props();
	const rootContext = PopoverRootContext.consume();
</script>

{@render props.children(rootContext)}
