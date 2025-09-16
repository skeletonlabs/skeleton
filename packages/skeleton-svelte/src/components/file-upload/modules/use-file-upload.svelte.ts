import { connect, machine } from '@zag-js/file-upload';
import type { Api, Props } from '@zag-js/file-upload';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useFileUpload(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const fileUpload = $derived(connect(service, normalizeProps));
	return () => fileUpload;
}
