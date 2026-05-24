import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/tabs';
import type { Api, Props } from '@zag-js/tabs';

export function useTabs(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const tabs = $derived(connect(service, normalizeProps));
	return () => tabs;
}
