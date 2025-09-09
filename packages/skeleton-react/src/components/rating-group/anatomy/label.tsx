import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupLabelProps extends PropsWithElement, ComponentProps<'label'> {}

export default function (props: RatingGroupLabelProps) {
	const { element, children, ...restAttributes } = props;

	const rootContext = useContext(RatingGroupRootContext);

	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesRatingGroup.label }, restAttributes);

	return element ? element({ attributes }) : <label {...attributes}>{children}</label>;
}
