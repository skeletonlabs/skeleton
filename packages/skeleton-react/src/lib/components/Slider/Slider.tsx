import { FC, useId } from 'react';

import * as slider from '@zag-js/slider';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { SliderProps } from './types';
import { noop } from '../../internal/noop.js';

export const Slider: FC<SliderProps> = ({
	height = 'h-1.5',
	// Root ---
	base = '',
	classes = '',
	// Control ---
	controlBase = '',
	controlClasses = '',
	// Track ---
	trackBase = 'overflow-hidden',
	trackBg = 'bg-surface-200-800',
	trackRounded = 'rounded-full',
	trackClasses = '',
	// Meter ---
	meterBase = '',
	meterBg = 'bg-surface-950-50',
	meterClasses = '',
	// Thumb ---
	thumbBase = '',
	thumbSize = 'size-5',
	thumbBg = 'bg-surface-50-950',
	thumbRing = 'ring-2 ring-inset',
	thumbRingColor = 'ring-surface-950-50',
	thumbRounded = 'rounded-full',
	thumbCursor = 'hover:cursor-pointer',
	thumbClasses = '',
	// Events
	onValueChange = noop,
	// Zag
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(
		slider.machine({
			id: useId(),
			min: 0,
			max: 100,
			step: 1,
			onValueChange: (details) => onValueChange(details.value)
		}),
		{ context: zagProps }
	);
	const api = slider.connect(state, send, normalizeProps);

	return (
		<div {...api.getRootProps()} className={`${base} ${classes}`} data-testid="slider">
			{/* Control */}
			<div {...api.getControlProps()} className={`${controlBase} ${controlClasses}`} data-testid="slider-control">
				{/* Track */}
				<div
					{...api.getTrackProps()}
					className={`${trackBase} ${trackBg} ${height} ${trackRounded} ${trackClasses}`}
					data-testid="slider-track"
				>
					{/* Meter */}
					<div {...api.getRangeProps()} className={`${meterBase} ${height} ${meterBg} ${meterClasses}`} data-testid="slider-meter" />
				</div>
				{/* Thumb Wrapper */}
				{/* NOTE: centers the thumbnails over the track. */}
				<div
					className={`${height}`}
					style={{ display: 'flex', alignItems: 'center', transform: 'translateY(-100%)' }}
					data-testid="slider-thumb-wrapper"
				>
					{api.value.map((_, index) => (
						<div
							key={index}
							{...api.getThumbProps({ index })}
							className={`${thumbBase} ${thumbSize} ${thumbBg} ${thumbRing} ${thumbRingColor} ${thumbRounded} ${thumbCursor} ${thumbClasses}`}
							data-testid="slider-thumb"
						>
							{/* Hidden Input(s) */}
							<input {...api.getHiddenInputProps({ index })} data-testid="slider-input" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
