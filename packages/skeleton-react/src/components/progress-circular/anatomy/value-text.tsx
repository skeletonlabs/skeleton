import { ProgressCircularRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircularValueTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ValueText(props: ProgressCircularValueTextProps) {
	const progressCircular = use(ProgressCircularRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progressCircular.getValueTextProps(),
		{
			className: classesProgressCircular.valueText,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children ?? progressCircular.valueAsString}</span>;
}
