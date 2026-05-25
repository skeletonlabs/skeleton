import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MarqueeRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { type PropsWithChildren, use } from 'react';

export interface MarqueeViewportProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Viewport(props: MarqueeViewportProps) {
	const marquee = use(MarqueeRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(marquee.getViewportProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
