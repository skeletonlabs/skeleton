import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { connect, machine } from '@zag-js/switch';
import type { Api, Props } from '@zag-js/switch';
import { use, useId } from 'react';
import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';

export function useSwitch(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(LocaleProviderContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});
	return connect(service, normalizeProps);
}
