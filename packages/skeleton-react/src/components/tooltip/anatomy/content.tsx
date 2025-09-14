import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TooltipRootContext } from '../modules/root-context';

export interface TooltipContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: TooltipContentProps) {
	const tooltip = use(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getContentProps(), rest, {
		className: classesTooltip.content,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
