import { Fragment, useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps, Portal } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: PopoverPositionerProps) {
	const popover = useContext(PopoverRootContext);

	const { element, children, ...rest } = props;

	const Wrapper = popover.portalled ? Portal : Fragment;

	const attributes = mergeProps(popover.getPositionerProps(), rest, {
		className: classesPopover.positioner
	});

	return <Wrapper>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Wrapper>;
}
