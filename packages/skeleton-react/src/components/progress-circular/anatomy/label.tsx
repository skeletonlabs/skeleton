import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircularLabelProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Label(props: ProgressCircularLabelProps) {
	const progressCircular = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progressCircular.getLabelProps(),
		{
			className: classesProgressCircular.label,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
