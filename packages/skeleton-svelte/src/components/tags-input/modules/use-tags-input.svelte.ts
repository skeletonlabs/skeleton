import { normalizeProps, useMachine } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tags-input';

export function useTagsInput(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const tagsinput = $derived(connect(service, normalizeProps));
	return () => tagsinput;
}
