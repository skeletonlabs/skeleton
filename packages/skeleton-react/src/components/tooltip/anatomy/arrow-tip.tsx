import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TooltipArrowTipProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: TooltipArrowTipProps) {
	const rootContext = useContext(TooltipRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getArrowTipProps(), { className: classesTooltip.arrowTip }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
