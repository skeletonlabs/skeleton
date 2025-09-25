import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tags-input';

export function useTagsInput(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const tagsInput = $derived(connect(service, normalizeProps));
	return () => tagsInput;
}
