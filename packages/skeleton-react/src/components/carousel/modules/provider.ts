import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { connect, machine } from '@zag-js/carousel';
import type { Api, Props } from '@zag-js/carousel';
import { useId } from 'react';

export function useCarousel(props: Omit<Props, 'id'> & { slideCount?: number }): Api<PropTypes> {
	const { slideCount, ...rest } = props;
	const service = useMachine(machine, {
		id: useId(),
		slideCount: slideCount ?? 0,
		...rest,
	});
	return connect(service, normalizeProps);
}
