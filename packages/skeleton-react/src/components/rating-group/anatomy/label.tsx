import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface RatingGroupLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}

export default function Label(props: RatingGroupLabelProps) {
	const ratingGroup = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		ratingGroup.getLabelProps(),
		{
			className: classesRatingGroup.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
