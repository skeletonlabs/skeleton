import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { connect, machine } from '@zag-js/carousel';
import type { Api, Props } from '@zag-js/carousel';
import { use, useId } from 'react';
import { LocaleProviderContext } from '../../locale-provider/modules/root-context.js';

export function useCarousel(props: Omit<Props, 'id'> & { slideCount?: number }): Api<PropTypes> {
	const { slideCount, ...rest } = props;
	const locale = use(LocaleProviderContext);

	const service = useMachine(machine, {
		id: useId(),
		dir: locale.dir,
		slideCount: slideCount ?? 0,
		...rest,
	});
	return connect(service, normalizeProps);
}
