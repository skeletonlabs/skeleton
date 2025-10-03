import { connect, machine } from '@zag-js/date-picker';
import type { Api, Props } from '@zag-js/date-picker';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useDatePicker(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const datePicker = $derived(connect(service, normalizeProps));
	return () => datePicker;
}
