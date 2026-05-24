import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/steps';
import type { Api, Props } from '@zag-js/steps';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSteps(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const steps = $derived(connect(service, normalizeProps));
	return () => steps;
}
