import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tags-input';

export function useTagsInput(props: Props | (() => Props)): () => Api<PropTypes> {
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2716
	const service = useMachine(machine, props);
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2716
	const tagsInput = $derived(connect(service, normalizeProps));
	return () => tagsInput;
}
