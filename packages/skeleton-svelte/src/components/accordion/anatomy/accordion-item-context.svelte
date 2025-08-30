<script lang="ts">
	import { AccordionItemContext } from '../modules/context.js';
	import type { AccordionItemContextProps } from '../modules/types.js';

	const props: AccordionItemContextProps = $props();
	const itemContext = AccordionItemContext.consume();
</script>

{@render props.children(itemContext.itemState)}
