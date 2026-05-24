import { connect, machine } from '@zag-js/progress';
import type { Api, Props } from '@zag-js/progress';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { use, useId } from 'react';
import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';

export function useProgress(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const locale = use(LocaleProviderContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		...props,
	});
	return connect(service, normalizeProps);
}
