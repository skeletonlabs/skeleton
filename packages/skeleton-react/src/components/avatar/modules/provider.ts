import { connect, machine } from '@zag-js/avatar';
import type { Api, Props } from '@zag-js/avatar';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { use, useId } from 'react';
import { RootContext } from '../../locale-provider/modules/root-context.js';

export function useAvatar(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(RootContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});
	return connect(service, normalizeProps);
}
