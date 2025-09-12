import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupLabelProps extends PropsWithElement, Omit<HTMLAttributes<'label'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupLabelProps) {
	const rootContext = useContext(RatingGroupRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesRatingGroup.label }, rest);

	return element ? element({ attributes }) : <label {...attributes}>{children}</label>;
}
