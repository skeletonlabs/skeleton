import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface RatingGroupHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'id' | 'dir' | 'children'> {}

export default function HiddenInput(props: RatingGroupHiddenInputProps) {
	const ratingGroup = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		ratingGroup.getHiddenInputProps(),
		{
			className: classesRatingGroup.hiddenInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
