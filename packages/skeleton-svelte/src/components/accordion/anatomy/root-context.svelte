<script lang="ts" module>
	import type { useAccordion } from '../modules/use-accordion.svelte';
	import type { Snippet } from 'svelte';

	export interface AccordionRootContextProps {
		children: Snippet<[ReturnType<typeof useAccordion>]>;
	}
</script>

<script lang="ts">
	import { AccordionRootContext } from '../modules/root-context';

	const props: AccordionRootContextProps = $props();

	const accordion = AccordionRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(accordion)}
