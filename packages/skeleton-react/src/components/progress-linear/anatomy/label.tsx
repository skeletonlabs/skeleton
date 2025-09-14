import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { ProgressLinearRootContext } from '../modules/root-context';

export interface ProgressLinearLabelProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ProgressLinearLabel(props: ProgressLinearLabelProps) {
	const progressLinear = use(ProgressLinearRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(progressLinear.getLabelProps(), rest, {
		className: classesProgressLinear.label,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
