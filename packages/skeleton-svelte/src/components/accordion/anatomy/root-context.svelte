<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Api } from '@zag-js/accordion';

	export interface AccordionRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { AccordionRootContext } from '../modules/root-context';

	const props: AccordionRootContextProps = $props();

	const accordion = AccordionRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(accordion)}
