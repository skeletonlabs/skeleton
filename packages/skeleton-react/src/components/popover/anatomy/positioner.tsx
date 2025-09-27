import { RootContext } from '../modules/root-context';
import { Portal } from '@/components/portal';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PopoverPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Positioner(props: PopoverPositionerProps) {
	const popover = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		popover.getPositionerProps(),
		{
			className: classesPopover.positioner,
		},
		rest,
	);

	return <Portal disabled={!popover.portalled}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Portal>;
}
