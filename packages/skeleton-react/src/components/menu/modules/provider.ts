import { type Api, connect, machine, type Props, type Service } from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { use, useId } from 'react';
import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';

export function useMenu(props: Omit<Props, 'id'> = {}): Api<PropTypes> & { service: Service } {
	const locale = use(LocaleProviderRootContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});
	return {
		...connect(service, normalizeProps),
		service,
	};
}
