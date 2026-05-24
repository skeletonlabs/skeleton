import { RootContext } from '../../locale-provider/modules/root-context.js';
import { connect, machine, type Api, type Props } from '@zag-js/qr-code';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useQrCode(props: Props | (() => Props)): () => Api<PropTypes> {
	const local = RootContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const qrCode = $derived(connect(service, normalizeProps));
	return () => qrCode;
}
