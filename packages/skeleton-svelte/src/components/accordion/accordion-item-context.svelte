<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ItemState } from '@zag-js/accordion';

	interface AccordionItemContextProps {
		children: Snippet<[ItemState]>;
	}
	export type { AccordionItemContextProps };
</script>

<script lang="ts">
	import { AccordionItemContext } from './accordion-item-context.js';

	const props: AccordionItemContextProps = $props();
	const itemContext = AccordionItemContext.consume();
</script>

{@render props.children(itemContext.itemState)}
