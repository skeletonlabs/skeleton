import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/carousel';
import type { Api, Props } from '@zag-js/carousel';

export function useCarousel(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const carousel = $derived(connect(service, normalizeProps));
	return () => carousel;
}
