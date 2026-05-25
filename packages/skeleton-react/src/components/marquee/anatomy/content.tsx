import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MarqueeRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import type { ContentProps } from '@zag-js/marquee';
import { type PropsWithChildren, use } from 'react';

export interface MarqueeContentProps extends ContentProps, PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: MarqueeContentProps) {
	const marquee = use(MarqueeRootContext);

	const { element, children, index, ...rest } = props;

	const attributes = mergeProps(marquee.getContentProps({ index }), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
