import { ProgressLinearRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressLinearRangeProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Range(props: ProgressLinearRangeProps) {
	const progressLinear = use(ProgressLinearRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		progressLinear.getRangeProps(),
		{
			className: classesProgressLinear.range,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes} />;
}
