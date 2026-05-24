import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props } from '@zag-js/listbox';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useListbox(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const listbox = $derived(connect(service, normalizeProps));
	return () => listbox;
}
