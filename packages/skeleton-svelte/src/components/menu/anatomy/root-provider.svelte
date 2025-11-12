<script lang="ts" module>
	import type { useMenu } from '../modules/provider.svelte.js';
	import type { Snippet } from 'svelte';

	export interface MenuRootProviderProps {
		value: ReturnType<typeof useMenu>;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: MenuRootProviderProps = $props();

	const { children, value: menu } = $derived(props);

	RootContext.provide(() => menu());
</script>

{@render children?.()}
