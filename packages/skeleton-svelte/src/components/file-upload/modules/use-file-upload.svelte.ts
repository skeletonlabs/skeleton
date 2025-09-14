import { type Api, connect, machine, type Props } from '@zag-js/file-upload';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useFileUpload(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const api = $derived(connect(service, normalizeProps));
	return () => api;
}
