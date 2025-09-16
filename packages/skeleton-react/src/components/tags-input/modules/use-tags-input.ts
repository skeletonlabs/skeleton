import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { type Api, connect, machine, type Props } from '@zag-js/tags-input';
import { useId } from 'react';

export function useTagsInput(props: Omit<Props, 'id'>): Api<PropTypes> {
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2716
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2716
	return connect(service, normalizeProps);
}
