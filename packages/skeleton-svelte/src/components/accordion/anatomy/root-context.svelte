<script lang="ts" module>
	import type { useAccordion } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface AccordionRootContextProps {
		children: Snippet<[ReturnType<typeof useAccordion>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: AccordionRootContextProps = $props();

	const accordion = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(accordion)}
