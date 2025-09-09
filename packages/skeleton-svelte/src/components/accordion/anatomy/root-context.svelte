<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { AccordionRootContextType } from '../modules/root-context';

	export interface AccordionRootContextProps {
		children: Snippet<[AccordionRootContextType]>;
	}
</script>

<script lang="ts">
	import { AccordionRootContext } from '../modules/root-context';

	const props: AccordionRootContextProps = $props();

	const rootContext = AccordionRootContext.consume();
</script>

{@render props.children(rootContext)}
