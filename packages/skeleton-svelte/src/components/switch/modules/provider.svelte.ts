import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/switch';
import type { Api, Props } from '@zag-js/switch';

export function useSwitch(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const switch_ = $derived(connect(service, normalizeProps));
	return () => switch_;
}
