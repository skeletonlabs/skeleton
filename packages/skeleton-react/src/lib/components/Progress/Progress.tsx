'use client';

import * as progress from '@zag-js/progress';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';
import type { FC } from 'react';
import type { ProgressProps } from './types.js';

export const Progress: FC<ProgressProps> = ({
	// Root
	base = 'flex items-center gap-4',
	height = 'h-2',
	width = 'w-full',
	classes = '',
	// Label
	labelBase = 'whitespace-nowrap',
	labelText = 'text-xs',
	labelClasses = '',
	// Track
	trackBase = 'h-full w-full overflow-x-hidden',
	trackBg = 'bg-surface-200-800',
	trackRounded = 'rounded',
	trackClasses = '',
	// Meter
	meterBase = 'h-full w-full',
	meterBg = 'bg-surface-950-50',
	meterRounded = 'rounded',
	meterTransition = 'transition-[width]',
	meterAnimate = 'animate-progress-indeterminate',
	meterClasses = '',
	// Children
	children,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(progress.machine, {
		id: useId(),
		...zagProps
	});
	const api = progress.connect(service, normalizeProps);

	// Reactive
	const rxIndeterminate = api.indeterminate ? meterAnimate : '';

	return (
		<figure {...api.getRootProps()} className={`${base} ${height} ${width} ${classes}`} data-testid="progress">
			{/* Label */}
			{!!children && (
				<div {...api.getLabelProps()} className={`${labelBase} ${labelText} ${labelClasses}`} data-testid="progress-label">
					{children}
				</div>
			)}
			{/* Track */}
			<div {...api.getTrackProps()} className={`${trackBase} ${trackBg} ${trackRounded} ${trackClasses}`} data-testid="progress-track">
				{/* Meter */}
				<div
					{...api.getRangeProps()}
					className={`${meterBase} ${meterBg} ${meterRounded} ${meterTransition} ${rxIndeterminate} ${meterClasses}`}
					data-testid="progress-meter"
				></div>
			</div>
		</figure>
	);
};
