import type { HTMLAttributes } from '../html-attributes';
import { mergeProps } from '@zag-js/react';

export type ChevronDownProps = HTMLAttributes<'svg', 'children'>;

export default function ChevronDown(props: ChevronDownProps) {
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
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}
