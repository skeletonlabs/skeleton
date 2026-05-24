import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props } from '@zag-js/listbox';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useListbox(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const listbox = $derived(connect(service, normalizeProps));
	return () => listbox;
}
