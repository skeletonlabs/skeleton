import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/date-picker';
import type { Api, Props } from '@zag-js/date-picker';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useDatePicker(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const datePicker = $derived(connect(service, normalizeProps));
	return () => datePicker;
}
