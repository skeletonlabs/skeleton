<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ToastRootContextType } from '../modules/toast-root-context';

	export interface ToastRootContextProps {
		children: Snippet<[ToastRootContextType]>;
	}
</script>

<script lang="ts">
	import { ToastRootContext } from '../modules/toast-root-context';

	const props: ToastRootContextProps = $props();
	const rootContext = ToastRootContext.consume();
</script>

{@render props.children(rootContext)}
