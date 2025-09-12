import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ProgressLinearLabelProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: ProgressLinearLabelProps) {
	const rootContext = useContext(ProgressLinearRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesProgressLinear.label }, rest);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
