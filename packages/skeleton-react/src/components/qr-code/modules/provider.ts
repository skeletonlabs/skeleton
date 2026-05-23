import { connect, machine, type Api, type Props } from '@zag-js/qr-code';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { useId } from 'react';

export function useQrCode(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});

	return connect(service, normalizeProps);
}
