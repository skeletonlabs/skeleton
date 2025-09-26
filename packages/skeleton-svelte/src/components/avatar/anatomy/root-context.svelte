<script lang="ts" module>
	import type { useAvatar } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface RootContextProps {
		children: Snippet<[ReturnType<typeof useAvatar>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';

	const props: RootContextProps = $props();

	const avatar = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(avatar)}
