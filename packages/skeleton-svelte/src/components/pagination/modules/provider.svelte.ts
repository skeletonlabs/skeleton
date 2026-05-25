import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/pagination';
import type { Api, Props } from '@zag-js/pagination';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function usePagination(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const pagination = $derived(connect(service, normalizeProps));
	return () => pagination;
}
