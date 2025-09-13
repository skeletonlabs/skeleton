import { connect, machine, type Api, type Props } from '@zag-js/combobox';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useCombobox(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const combobox = $derived(connect(service, normalizeProps));
	return () => combobox;
}
