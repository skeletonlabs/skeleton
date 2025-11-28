import { type Api, connect, machine, type Props } from '@zag-js/floating-panel';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useFloatingPanel(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const floatingPanel = $derived(connect(service, normalizeProps));
	return () => floatingPanel;
}
