import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/avatar';
import type { Api, Props } from '@zag-js/avatar';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useAvatar(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const avatar = $derived(connect(service, normalizeProps));
	return () => avatar;
}
