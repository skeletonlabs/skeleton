<script lang="ts" module>
	import type { Api } from '@zag-js/toast';
	import type { Snippet } from 'svelte';

	export interface ToastRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { ToastRootContext } from '../modules/root-context';

	const props: ToastRootContextProps = $props();

	const toast = ToastRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(toast)}
