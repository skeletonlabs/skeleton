import { useEffect, type FC } from 'react';

import { ProgressProps } from './types.js';

export const Progress: FC<ProgressProps> = ({
	value,
	max = 100,
	labelledBy = '',
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
	meterAnimate = 'animate-progress-indeterminate',
	meterClasses = ''
}) => {
	useEffect(() => {
		if (max < 0) {
			console.warn('The max prop should be greater than or equal to 0');
		}
	});

	const indeterminate = value === undefined;
	const fillPercentage = `${indeterminate ? 50 : ((value! - 0) / (max - 0)) * 100}%`;
	const rxIndeterminate = indeterminate ? meterAnimate : '';

	return (
		<>
			<div
				role="progressbar"
				aria-labelledby={labelledBy}
				aria-valuenow={value}
				aria-valuemin={0}
				aria-valuemax={max}
				className={`${base} ${bg} ${width} ${height} ${rounded} ${classes}`}
			>
				<div
					className={`${meterBase} ${meterBg} ${meterRounded} ${meterTransition} ${rxIndeterminate} ${meterClasses}`}
					style={{ width: fillPercentage }}
				></div>
			</div>
		</>
	);
};
