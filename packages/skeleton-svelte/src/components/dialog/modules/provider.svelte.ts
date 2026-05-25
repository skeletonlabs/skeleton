import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props } from '@zag-js/dialog';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useDialog(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const dialog = $derived(connect(service, normalizeProps));
	return () => dialog;
}
