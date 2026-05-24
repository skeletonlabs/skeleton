import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/slider';
import type { Api, Props } from '@zag-js/slider';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSlider(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const slider = $derived(connect(service, normalizeProps));
	return () => slider;
}
