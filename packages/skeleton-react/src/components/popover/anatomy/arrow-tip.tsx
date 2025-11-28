import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PopoverArrowTipProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ArrowTip(props: PopoverArrowTipProps) {
	const popover = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		popover.getArrowTipProps(),
		{
			className: classes.popover.arrowTip,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
