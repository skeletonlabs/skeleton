import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine } from '@zag-js/file-upload';
import type { Api, Props } from '@zag-js/file-upload';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useFileUpload(props: Props | (() => Props)): () => Api<PropTypes> {
	const locale = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: locale().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const fileUpload = $derived(connect(service, normalizeProps));
	return () => fileUpload;
}
