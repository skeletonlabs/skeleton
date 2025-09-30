import type { HTMLAttributes } from '../html-attributes';
import { mergeProps } from '@zag-js/react';

export type XProps = HTMLAttributes<'svg', 'children'>;

export default function X(props: XProps) {
	const { ...rest } = props;

	const attributes = mergeProps(
		{
			xmlns: 'http://www.w3.org/2000/svg',
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '2',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		rest,
	);

	return (
		<svg {...attributes}>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
