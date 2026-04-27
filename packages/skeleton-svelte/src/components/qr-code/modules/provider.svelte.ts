import { connect, machine, type Api, type Props } from '@zag-js/qr-code';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useQrCode(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const qrCode = $derived(connect(service, normalizeProps));
	return () => qrCode;
}
