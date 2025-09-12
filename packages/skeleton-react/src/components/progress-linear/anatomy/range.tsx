import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ProgressLinearRangeProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'children'> {}

export default function (props: ProgressLinearRangeProps) {
	const rootContext = useContext(ProgressLinearRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getRangeProps(), { className: classesProgressLinear.range }, rest);

	return element ? element({ attributes }) : <div {...attributes} />;
}
