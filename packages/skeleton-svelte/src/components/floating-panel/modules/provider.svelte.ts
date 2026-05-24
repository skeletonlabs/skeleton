import { RootContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props } from '@zag-js/floating-panel';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useFloatingPanel(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = RootContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const floatingPanel = $derived(connect(service, normalizeProps));
	return () => floatingPanel;
}
