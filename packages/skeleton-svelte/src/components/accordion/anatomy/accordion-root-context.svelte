<script lang="ts">
	import { AccordionRootContext } from '../modules/context.js';
	import type { AccordionRootContextProps } from '../modules/types.js';

	const props: AccordionRootContextProps = $props();
	const rootContext = AccordionRootContext.consume();
</script>

{@render props.children(rootContext.api)}
