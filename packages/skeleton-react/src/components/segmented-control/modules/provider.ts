import { connect, machine } from '@zag-js/radio-group';
import type { Api, Props } from '@zag-js/radio-group';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { use, useId } from 'react';
import { RootContext } from '../../locale-provider/modules/root-context.js';

export function useSegmentedControl(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(RootContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		orientation: 'horizontal',
		...props,
	});
	return connect(service, normalizeProps);
}
