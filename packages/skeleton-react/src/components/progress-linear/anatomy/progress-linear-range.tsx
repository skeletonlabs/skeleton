import { useContext, type ComponentProps } from 'react';
// Zag
import { mergeProps } from '@zag-js/react';
// Internal
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
// Local
import { ProgressLinearRootContext } from '../modules/progress-linear-root-context';

export interface ProgressLinearRangeProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'children'> {}

export default function (props: ProgressLinearRangeProps) {
	const rootContext = useContext(ProgressLinearRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getRangeProps(), { className: classesProgressLinear.range }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes} />;
}
