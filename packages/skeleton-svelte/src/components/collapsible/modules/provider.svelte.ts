import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/collapsible';
import type { Api, Props } from '@zag-js/collapsible';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useCollapsible(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const collapsible = $derived(connect(service, normalizeProps));
	return () => collapsible;
}
