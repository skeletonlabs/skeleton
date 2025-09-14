import { use } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> { }

export default function (props: RatingGroupLabelProps) {
	const ratingGroup = use(RatingGroupRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(ratingGroup.getLabelProps(), rest, {
		className: classesRatingGroup.label
	});

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
