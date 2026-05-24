import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props } from '@zag-js/combobox';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useCombobox(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const combobox = $derived(connect(service, normalizeProps));
	return () => combobox;
}
