import { RatingGroupRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface RatingGroupControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function RatingGroupControl(props: RatingGroupControlProps) {
	const ratingGroup = use(RatingGroupRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(ratingGroup.getControlProps(), rest, {
		className: classesRatingGroup.control,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
