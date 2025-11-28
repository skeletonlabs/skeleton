import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { type PropsWithChildren, use } from 'react';

export interface PopoverAnchorProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Anchor(props: PopoverAnchorProps) {
	const popover = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		popover.getAnchorProps(),
		{
			className: classes.popover.anchor,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
