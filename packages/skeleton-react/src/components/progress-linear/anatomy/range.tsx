import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ProgressLinearRangeProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function (props: ProgressLinearRangeProps) {
	const progressLinear = useContext(ProgressLinearRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(progressLinear.getRangeProps(), rest, {
		className: classesProgressLinear.range
	});

	return element ? element(attributes) : <div {...attributes} />;
}
