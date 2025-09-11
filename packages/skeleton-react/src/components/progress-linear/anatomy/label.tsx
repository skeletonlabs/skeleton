import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ProgressLinearLabelProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: ProgressLinearLabelProps) {
	const rootContext = useContext(ProgressLinearRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesProgressLinear.label }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
