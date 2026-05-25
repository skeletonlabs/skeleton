import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props, type Service } from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useMenu(props: Props | (() => Props)): () => Api<PropTypes> & { service: Service } {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const menu = $derived(connect(service, normalizeProps));
	return () => ({
		...menu,
		get service() {
			return service;
		},
	});
}
