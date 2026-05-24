import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tags-input';

export function useTagsInput(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const tagsInput = $derived(connect(service, normalizeProps));
	return () => tagsInput;
}
