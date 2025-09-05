<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { AccordionItemContextType } from '../modules/accordion-item-context';

	export interface AccordionItemContextProps {
		children: Snippet<[AccordionItemContextType]>;
	}
</script>

<script lang="ts">
	import { AccordionItemContext } from '../modules/accordion-item-context';

	const props: AccordionItemContextProps = $props();
	const itemContext = AccordionItemContext.consume();
</script>

{@render props.children(itemContext)}
