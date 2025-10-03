import type { HTMLAttributes } from '../html-attributes';
import { mergeProps } from '@zag-js/react';

export type CalendarProps = HTMLAttributes<'svg', 'children'>;

export default function Calendar(props: CalendarProps) {
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
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	);
}
