import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { RatingGroupRootContext } from '../modules/context.js';
import type { RatingGroupHiddenInputProps } from '../modules/types.js';

export default function (props: RatingGroupHiddenInputProps) {
	const rootContext = useContext(RatingGroupRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getHiddenInputProps(),
		{
			className: classesRatingGroup.hiddenInput
		},
		restAttributes
	);
	return element ? element({ attributes }) : <input {...attributes} />;
}
