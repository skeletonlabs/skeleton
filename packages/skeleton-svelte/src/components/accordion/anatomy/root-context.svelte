<script lang="ts" module>
	import type { useAccordion } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface RootContextProps {
		children: Snippet<[ReturnType<typeof useAccordion>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';

	const props: RootContextProps = $props();

	const accordion = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(accordion)}
