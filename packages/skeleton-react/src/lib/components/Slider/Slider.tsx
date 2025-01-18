'use client';

import { FC, useId } from 'react';

import * as slider from '@zag-js/slider';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { SliderProps } from './types';
import { noop } from '../../internal/noop.js';

export const Slider: FC<SliderProps> = ({
	height = 'h-1.5',
	markers = [],
	// Root ---
	base = 'w-full',
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
	materRounded = 'rounded-container',
	meterClasses = '',
	// Thumb ---
	thumbBase = 'ring-inset transition-scale duration-100 ease-in-out',
	thumbSize = 'size-8 md:size-5',
	thumbBg = 'bg-surface-50-950',
	thumbRingSize = 'ring-2',
	thumbRingColor = 'ring-surface-950-50',
	thumbRounded = 'rounded-full',
	thumbCursor = 'hover:cursor-pointer',
	thumbClasses = '',
	// Markers ---
	markersBase = '',
	markerslasses = '',
	// Mark ---
	markBase = '',
	markText = 'text-[10px]',
	markOpacity = 'opacity-50',
	markClasses = '',
	// State ---
	stateDisabled = 'disabled',
	stateReadOnly = 'cursor-not-allowed',
	// Events ---
	onValueChange = noop,
	onValueChangeEnd = noop,
	// Children ---
	mark,
	// Zag ---
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(
		slider.machine({
			id: useId(),
			onValueChange: (details) => onValueChange(details.value),
			onValueChangeEnd: (details) => onValueChangeEnd(details.value)
		}),
		{ context: zagProps }
	);
	const api = slider.connect(state, send, normalizeProps);

	// Reactive
	const rxDisabled = state.context.disabled ? stateDisabled : '';
	const rxReadOnly = state.context.readOnly ? stateReadOnly : thumbCursor;

	return (
		<div {...api.getRootProps()} className={`${base} ${height} ${rxDisabled} ${classes}`} data-testid="slider">
			{/* Control */}
			<div {...api.getControlProps()} className={`${controlBase} ${controlClasses}`} data-testid="slider-control">
				{/* Track */}
				<div
					{...api.getTrackProps()}
					className={`${trackBase} ${trackBg} ${height} ${trackRounded} ${trackClasses}`}
					data-testid="slider-track"
				>
					{/* Meter */}
					<div
						{...api.getRangeProps()}
						className={`${meterBase} ${height} ${meterBg} ${materRounded} ${meterClasses}`}
						data-testid="slider-meter"
					></div>
				</div>
				{/* NOTE: this div centers thumbs vertically */}
				<div
					className={`${height}`}
					style={{ display: 'flex', alignItems: 'center', transform: 'translateY(-100%)' }}
					data-testid="slider-thumb-wrapper"
				>
					{api.value.map((_, index) => (
						<div key={index} {...api.getThumbProps({ index })}>
							{/* Thumb */}
							<div
								className={`${thumbBase} ${thumbSize} ${thumbBg} ${thumbRingSize} ${thumbRingColor} ${thumbRounded} ${rxReadOnly} ${thumbClasses}`}
								data-testid="slider-thumb"
							></div>
							{/* Hidden Input(s) */}
							<input {...api.getHiddenInputProps({ index })} data-testid="slider-input" />
						</div>
					))}
				</div>
			</div>
			{/* Markers */}
			{markers.length > 0 && (
				<div {...api.getMarkerGroupProps()} className={`${markersBase} ${markerslasses}`} data-testid="slider-markers">
					{markers.map((value: number) => (
						// Mark
						<span
							key={value}
							{...api.getMarkerProps({ value })}
							className={`${markBase} ${markText} ${markOpacity} ${markClasses}`}
							data-testid="slider-mark"
						>
							{mark ? mark : value}
						</span>
					))}
				</div>
			)}
		</div>
	);
};
