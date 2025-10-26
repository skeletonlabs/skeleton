import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesProgress } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressValueTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ValueText(props: ProgressValueTextProps) {
	const progress = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progress.getValueTextProps(),
		{
			className: classesProgress.valueText,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children ?? progress.percentAsString}</span>;
}
