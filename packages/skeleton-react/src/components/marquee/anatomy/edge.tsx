import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MarqueeRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import type { EdgeProps } from '@zag-js/marquee';
import { type PropsWithChildren, use } from 'react';

export interface MarqueeEdgeProps extends EdgeProps, PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Edge(props: MarqueeEdgeProps) {
	const marquee = use(MarqueeRootContext);

	const { element, children, side, ...rest } = props;

	const attributes = mergeProps(marquee.getEdgeProps({ side }), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
