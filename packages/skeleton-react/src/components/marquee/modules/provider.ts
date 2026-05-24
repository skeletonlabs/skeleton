import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { type Api, connect, machine, type Props } from '@zag-js/marquee';
import { use, useId } from 'react';
import { RootContext } from '../../locale-provider/modules/root-context.js';

export function useMarquee(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(RootContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});
	return connect(service, normalizeProps);
}
