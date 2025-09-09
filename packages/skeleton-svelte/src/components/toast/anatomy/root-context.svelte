<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ToastRootContextType } from '../modules/root-context';

	export interface ToastRootContextProps {
		children: Snippet<[ToastRootContextType]>;
	}
</script>

<script lang="ts">
	import { ToastRootContext } from '../modules/root-context';

	const props: ToastRootContextProps = $props();

	const rootContext = ToastRootContext.consume();
</script>

{@render props.children(rootContext)}
