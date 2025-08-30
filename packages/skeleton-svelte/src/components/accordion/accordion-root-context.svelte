<script lang="ts" module>
	import type { Api } from '@zag-js/accordion';
	import type { Snippet } from 'svelte';

	interface AccordionRootContextProps {
		children: Snippet<[Api]>;
	}

	export type { AccordionRootContextProps };
</script>

<script lang="ts">
	import { AccordionRootContext } from './accordion-root-context.js';

	const props: AccordionRootContextProps = $props();
	const rootContext = AccordionRootContext.consume();
</script>

{@render props.children(rootContext.api)}
