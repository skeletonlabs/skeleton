import { useContext, type CSSProperties } from 'react';
import { mergeProps } from '@zag-js/react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface TooltipArrowProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: TooltipArrowProps) {
	const tooltip = useContext(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getArrowProps(), rest, {
		className: classesTooltip.arrow,
		style: {
			'--arrow-size': 'calc(var(--spacing) * 2)',
			'--arrow-background': 'var(--color-surface-100-900)'
		} as CSSProperties
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
