import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { RatingGroupRootContext } from '../modules/context.js';
import type { RatingGroupLabelProps } from '../modules/types.js';

export default function (props: RatingGroupLabelProps) {
	const rootContext = useContext(RatingGroupRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getControlProps(),
		{
			className: classesRatingGroup.control
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
