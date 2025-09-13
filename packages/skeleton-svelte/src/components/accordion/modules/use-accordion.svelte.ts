import { connect, machine, type Api, type Props } from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useAccordion(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const accordion = $derived(connect(service, normalizeProps));
	return () => accordion;
}
