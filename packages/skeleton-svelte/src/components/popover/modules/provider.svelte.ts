import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { type Api, connect, machine, type Props } from '@zag-js/popover';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function usePopover(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const popover = $derived(connect(service, normalizeProps));
	return () => popover;
}
