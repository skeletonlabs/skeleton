import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { RatingGroupRootContext } from '../modules/rating-group-root-context.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

export interface RatingGroupControlProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupControlProps) {
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
