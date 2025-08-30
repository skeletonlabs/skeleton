import { splitProps, machine, connect, type Props } from '@zag-js/rating-group';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { useId, type ComponentProps } from 'react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from './rating-group-root-context.js';
import type { PropsWithElement } from '../../internal/props-with-element.js';

export interface RatingGroupRootProps
	extends PropsWithElement,
		Omit<Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupRootProps) {
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const [machineProps, componentProps] = splitProps(props);
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: classesRatingGroup.root
		},
		restAttributes
	);
	return (
		<RatingGroupRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</RatingGroupRootContext.Provider>
	);
}
