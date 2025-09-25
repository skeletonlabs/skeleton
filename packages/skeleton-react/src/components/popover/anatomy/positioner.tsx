import { PopoverRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps, Portal } from '@zag-js/react';
import { Fragment, use } from 'react';

export interface PopoverPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Positioner(props: PopoverPositionerProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const Wrapper = popover.portalled ? Portal : Fragment;

	const attributes = mergeProps(
		popover.getPositionerProps(),
		{
			className: classesPopover.positioner,
		},
		rest,
	);

	return <Wrapper>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Wrapper>;
}
