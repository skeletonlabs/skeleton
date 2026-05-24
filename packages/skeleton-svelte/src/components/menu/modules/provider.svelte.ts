import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props, type Service } from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useMenu(props: Props | (() => Props)): () => Api<PropTypes> & { service: Service } {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
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
