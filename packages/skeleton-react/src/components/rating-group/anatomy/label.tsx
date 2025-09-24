import { RatingGroupRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface RatingGroupLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}

export default function Label(props: RatingGroupLabelProps) {
	const ratingGroup = use(RatingGroupRootContext);

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
