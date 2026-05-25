import { connect, machine, type Api, type Props } from '@zag-js/qr-code';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { use, useId } from 'react';
import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';

export function useQrCode(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(LocaleProviderRootContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});

	return connect(service, normalizeProps);
}
