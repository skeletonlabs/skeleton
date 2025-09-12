import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupControlProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupControlProps) {
	const rootContext = useContext(RatingGroupRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getControlProps(), { className: classesRatingGroup.control }, rest);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
