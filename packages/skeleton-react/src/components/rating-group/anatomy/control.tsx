import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface RatingGroupControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function (props: RatingGroupControlProps) {
	const ratingGroup = useContext(RatingGroupRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(ratingGroup.getControlProps(), rest, {
		className: classesRatingGroup.control
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
