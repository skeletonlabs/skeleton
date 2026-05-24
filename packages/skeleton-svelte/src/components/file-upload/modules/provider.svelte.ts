import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/file-upload';
import type { Api, Props } from '@zag-js/file-upload';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useFileUpload(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = LocaleProviderContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const fileUpload = $derived(connect(service, normalizeProps));
	return () => fileUpload;
}
