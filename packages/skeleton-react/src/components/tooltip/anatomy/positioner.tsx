import { useContext, type ComponentProps } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TooltipPositionerProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: TooltipPositionerProps) {
	const rootContext = useContext(TooltipRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getPositionerProps(), { className: classesTooltip.positioner }, restAttributes);

	return <Portal>{element ? element({ attributes }) : <div {...attributes}>{children}</div>}</Portal>;
}
