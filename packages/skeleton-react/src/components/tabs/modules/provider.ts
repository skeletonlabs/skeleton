import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { connect, machine } from '@zag-js/tabs';
import type { Api, Props } from '@zag-js/tabs';
import { use, useId } from 'react';
import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';

export function useTabs(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(LocaleProviderRootContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});
	return connect(service, normalizeProps);
}
