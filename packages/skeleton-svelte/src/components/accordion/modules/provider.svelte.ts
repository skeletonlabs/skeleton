import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/accordion';
import type { Api, Props } from '@zag-js/accordion';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useAccordion(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const accordion = $derived(connect(service, normalizeProps));
	return () => accordion;
}
