import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TooltipContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: TooltipContentProps) {
	const tooltip = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tooltip.getContentProps(),
		{
			className: classesTooltip.content,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
