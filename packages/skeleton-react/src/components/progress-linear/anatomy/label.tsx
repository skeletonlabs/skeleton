import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ProgressLinearLabelProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: ProgressLinearLabelProps) {
	const progressLinear = useContext(ProgressLinearRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(progressLinear.getLabelProps(), rest, {
		className: classesProgressLinear.label
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
