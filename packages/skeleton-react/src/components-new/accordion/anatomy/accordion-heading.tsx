import type { JSX } from 'react';
import type { AccordionHeadingProps } from '../modules/types.js';

export default function (props: AccordionHeadingProps) {
	const { level = 3, children, ...restAttributes } = props;
	const Tag: keyof JSX.IntrinsicElements = `h${level}`;
	return <Tag {...restAttributes}>{children}</Tag>;
}
