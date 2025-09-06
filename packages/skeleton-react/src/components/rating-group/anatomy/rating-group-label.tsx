import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/rating-group-root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupLabelProps extends PropsWithElement, Omit<ComponentProps<'label'>, 'id' | 'defaultValue' | 'dir'> {}

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
