import * as progress from '@zag-js/progress';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';
import type { FC } from 'react';
import type { ProgressProps } from './types.js';

export const Progress: FC<ProgressProps> = ({
	// Root
	base = 'overflow-x-hidden',
	bg = 'bg-surface-200-800',
	width = 'w-full',
	height = 'h-2',
	rounded = 'rounded',
	classes = '',
	// Meter
	meterBase = 'h-full',
	meterBg = 'bg-surface-950-50',
	meterRounded = 'rounded',
	meterTransition = 'transition-[width]',
	meterAnimate = 'animate-indeterminate',
	meterClasses = '',
	// Label
	labelBase = 'text-sm',
	labelClasses = '',
	// Snippets
	label,
	// Zag
	...zagProps
}) => {
	// Machine
	const [state, send] = useMachine(progress.machine({ id: useId() }), { context: zagProps });

	// API
	const api = progress.connect(state, send, normalizeProps);
	return (
		<div {...api.getRootProps()}>
			{!!label && (
				<div className={`${labelBase} ${labelClasses}`} {...api.getLabelProps()}>
					label
				</div>
			)}
			<div className={`${base} ${bg} ${width} ${height} ${rounded} ${classes}`} {...api.getTrackProps()}>
				<div
					className={`${meterBase} ${meterBg} ${meterRounded} ${meterTransition} ${api.indeterminate ? meterAnimate : ''} ${meterClasses}`}
					{...api.getRangeProps()}
				></div>
			</div>
		</div>
	);
};
