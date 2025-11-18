import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelBodyProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Body(props: FloatingPanelBodyProps) {
	const floatingPanel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		floatingPanel.getBodyProps(),
		{
			className: classesFloatingPanel.body,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
