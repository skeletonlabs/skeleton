import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { PopoverRootContext } from '../modules/root-context';

export interface PopoverArrowTipProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ArrowTip(props: PopoverArrowTipProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getArrowTipProps(), rest, {
		className: classesPopover.arrowTip,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
