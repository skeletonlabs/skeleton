import * as ratingGroup from '@zag-js/rating-group';
import type { RatingGroupRootProps } from '../modules/types.js';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/context.js';

export default function (props: RatingGroupRootProps) {
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const [machineProps, componentProps] = ratingGroup.splitProps(props);
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(ratingGroup.machine, {
		// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
		id: useId(),
		...machineProps
	});
	const api = ratingGroup.connect(service, normalizeProps);
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
