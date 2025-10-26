import type { HTMLAttributes } from '@/internal/html-attributes.js';
import { mergeProps } from '@zag-js/react';

export type CheckProps = HTMLAttributes<'svg', 'children'>;

export default function Check(props: CheckProps) {
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
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}
