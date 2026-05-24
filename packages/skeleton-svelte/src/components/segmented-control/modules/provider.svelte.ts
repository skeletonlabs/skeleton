import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/radio-group';
import type { Api, Props } from '@zag-js/radio-group';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSegmentedControl(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		orientation: 'horizontal' as const,
		...(typeof props === 'function' ? props() : props),
	}));
	const segmentedControl = $derived(connect(service, normalizeProps));
	return () => segmentedControl;
}
