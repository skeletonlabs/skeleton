import { connect, machine } from '@zag-js/accordion';
import type { Api, Props } from '@zag-js/accordion';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useAccordion(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const accordion = $derived(connect(service, normalizeProps));
	return () => accordion;
}
