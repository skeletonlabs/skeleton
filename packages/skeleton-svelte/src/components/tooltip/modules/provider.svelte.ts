import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tooltip';

export function useTooltip(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const tooltip = $derived(connect(service, normalizeProps));
	return () => tooltip;
}
