import { RootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/progress';
import type { Api, Props } from '@zag-js/progress';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useProgress(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = RootContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const progress = $derived(connect(service, normalizeProps));
	return () => progress;
}
