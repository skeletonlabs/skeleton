import { useContext } from 'react';
import { RatingGroupRootContext } from '../modules/context.js';
import type { RatingGroupLabelProps } from '../modules/types.js';
import { mergeProps } from '@zag-js/react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';

export default function (props: RatingGroupLabelProps) {
	const rootContext = useContext(RatingGroupRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getLabelProps(),
		{
			className: classesRatingGroup.label
		},
		restAttributes
	);
	return element ? element({ attributes }) : <label {...attributes}>{children}</label>;
}
