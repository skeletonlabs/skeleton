import { useId } from 'react';
import type { FC } from 'react';
import { normalizeProps, useMachine } from '@zag-js/react';
import * as progress from '@zag-js/progress';
import type { ProgressRingProps } from './types.js';

export const ProgressRing: FC<ProgressRingProps> = ({
	label,
	strokeWidth = '10px',
	strokeLinecap = 'round',
	// Root
	base = 'relative',
	size = 'size-32',
	classes = '',
	// Slot
	childrenBase = 'absolute top-0 left-0 z-[1] flex justify-center items-center',
	childrenClasses = '',
	// SVG
	svgBase = 'absolute top-0 left-0 size-full rounded-full',
	svgClasses = '',
	// Track
	trackBase = 'fill-none',
	trackStroke = 'stroke-surface-200-800',
	trackClasses = '',
	// Meter
	meterBase = 'fill-none',
	meterStroke = 'stroke-primary-500',
	meterTransition = 'transition-[stroke-dashoffset] transition-[stroke-dashoffset]',
	meterAnimate = 'animate-ring-indeterminate',
	meterDuration = 'duration-200',
	meterClasses = '',
	// Label
	labelBase = '',
	labelFill = 'fill-surface-950-50',
	labelFontSize = 24, // px
	labelFontWeight = 'bold',
	labelClasses = '',
	// Children
	children,
	// Zag
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(progress.machine({ id: useId() }), { context: zagProps });
	const api = progress.connect(state, send, normalizeProps);

	// Reactive Classes
	const rxAnimCircle = api.indeterminate && 'animate-spin';
	const rxAnimMeter = api.indeterminate && meterAnimate;

	return (
		<figure {...api.getRootProps()} className={`${base} ${size} ${classes}`} data-testid="progress-ring">
			{/* Children */}
			<div {...api.getLabelProps()} className={`${childrenBase} ${size} ${childrenClasses}`}>
				{children}
			</div>
			{/* SVG */}
			<svg
				{...api.getCircleProps()}
				className={`${svgBase} ${svgClasses} ${rxAnimCircle}`}
				style={{ '--size': '100%', '--thickness': strokeWidth } as React.CSSProperties}
			>
				{/* Track */}
				<circle {...api.getCircleTrackProps()} className={`${trackBase} ${trackStroke} ${trackClasses}`} />
				{/* Meter */}
				<circle
					{...api.getCircleRangeProps()}
					className={`${meterBase} ${meterStroke} ${meterTransition} ${meterDuration} ${meterClasses} ${rxAnimMeter}`}
					strokeLinecap={strokeLinecap}
				/>
				{/* Label */}
				{api.value !== null && !children && (
					<text
						className={`${labelBase} ${labelFill} ${labelClasses}`}
						x="50%"
						y="50%"
						fontSize={labelFontSize}
						fontWeight={labelFontWeight}
						textAnchor="middle"
						dominantBaseline="central"
					>
						{label ?? `${api.value}%`}
					</text>
				)}
			</svg>
		</figure>
	);
};
