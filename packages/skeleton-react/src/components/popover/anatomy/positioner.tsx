import { Fragment, useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps, Portal } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverPositionerProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: PopoverPositionerProps) {
	const rootContext = useContext(PopoverRootContext);

	const { element, children, ...restAttributes } = props;

	const Wrapper = rootContext.api.portalled ? Portal : Fragment;

	const attributes = mergeProps(rootContext.api.getPositionerProps(), { className: classesPopover.positioner }, restAttributes);

	return <Wrapper>{element ? element({ attributes }) : <div {...attributes}>{children}</div>}</Wrapper>;
}
