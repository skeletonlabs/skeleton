import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TooltipContentProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: TooltipContentProps) {
	const rootContext = useContext(TooltipRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getContentProps(), { className: classesTooltip.content }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
