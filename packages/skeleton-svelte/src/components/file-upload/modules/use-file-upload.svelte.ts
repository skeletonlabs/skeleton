import { connect, machine, type Props } from '@zag-js/file-upload';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useFileUpload(props: () => Omit<Props, 'id'>) {
	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...props()
	}));
	const api = $derived(connect(service, normalizeProps));
	return () => api;
}
