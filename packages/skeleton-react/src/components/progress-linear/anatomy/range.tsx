import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ProgressLinearRangeProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'children'> {}

export default function (props: ProgressLinearRangeProps) {
	const rootContext = useContext(ProgressLinearRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getRangeProps(), { className: classesProgressLinear.range }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes} />;
}
