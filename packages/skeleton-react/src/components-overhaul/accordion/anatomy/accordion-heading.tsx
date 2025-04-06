import type { JSX } from 'react';
import type { AccordionHeadingProps } from '../modules/types.js';

export default function (props: AccordionHeadingProps) {
	const { level = 3, child, children, ...restAttributes } = props;
	const Tag: keyof JSX.IntrinsicElements = `h${level}`;
	return child ? child(restAttributes) : <Tag {...restAttributes}>{children}</Tag>;
}
