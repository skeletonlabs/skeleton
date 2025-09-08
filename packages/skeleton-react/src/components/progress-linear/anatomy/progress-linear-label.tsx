import { useContext, type ComponentProps } from 'react';
// Zag
import { mergeProps } from '@zag-js/react';
// Internal
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
// Local
import { ProgressLinearRootContext } from '../modules/progress-linear-root-context';

export interface ProgressLinearLabelProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: ProgressLinearLabelProps) {
	const rootContext = useContext(ProgressLinearRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesProgressLinear.label }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
