'use client';

import React from 'react';
import { SwitchProps } from './types.js';

export const Switch: React.FC<SwitchProps> = ({
	id = '',
	name = '',
	checked = false,
	disabled = false,
	compact = false,
	// Aria
	labelledBy = undefined,
	describedBy = undefined,
	// Root (Track)
	base = 'cursor-pointer transition duration-200',
	stateInactive = 'preset-filled-surface-200-800',
	stateActive = 'preset-filled-primary-500',
	stateDisabled = 'opacity-50 cursor-not-allowed',
	width = 'w-10',
	height = 'h-6',
	padding = 'p-0.5',
	rounded = 'rounded-full',
	hover = 'hover:brightness-90 dark:hover:brightness-110',
	classes = '',
	// Thumb
	thumbBase = 'right-0 aspect-square h-full flex justify-center items-center text-right',
	thumbInactive = 'preset-filled-surface-50-950',
	thumbActive = 'bg-surface-50 text-surface-contrast-50',
	thumbRounded = 'rounded-full',
	thumbTranslateX = 'translate-x-4',
	thumbTransition = 'transition',
	thumbEase = 'ease-in-out',
	thumbDuration = 'duration-200',
	thumbClasses = '',
	// Icons
	iconInactiveBase = 'pointer-events-none',
	iconActiveBase = 'pointer-events-none',
	// Events
	onChange = () => {},
	// Children
	inactiveChild,
	activeChild
}) => {
	// Set Compact Mode
	if (compact) {
		base = thumbBase;
		// Removes the height class
		height = '';
		// Thumb inherits track styles
		thumbInactive = stateInactive;
		thumbActive = stateActive;
		// Remove X-axis translate
		thumbTranslateX = '';
		// Remove padding
		padding = '';
	}

	function toggle() {
		if (disabled) return;
		checked = !checked;
		onChange(checked);
	}

	const rxTrackState = checked ? stateActive : stateInactive;
	const rxThumbState = checked ? `${thumbActive} ${thumbTranslateX}` : thumbInactive;
	const rxDisabled = disabled ? stateDisabled : '';

	return (
		<button
			type="button"
			className={`${base} ${rxTrackState} ${width} ${height} ${padding} ${rounded} ${hover} ${rxDisabled} ${classes}`}
			role="switch"
			aria-checked={checked}
			aria-labelledby={labelledBy}
			aria-describedby={describedBy}
			onClick={toggle}
			data-testid="switch"
		>
			{/* Hidden Input - true: 'on', false: null */}
			{checked ?? <input type="hidden" id={id} name={name} value="on" disabled={disabled} />}
			{/* Thumb */}
			<div className={`${thumbBase} ${rxThumbState} ${thumbRounded} ${thumbTransition} ${thumbEase} ${thumbDuration} ${thumbClasses}`}>
				{/* Icon Inactive */}
				{!checked && inactiveChild ? <span className={iconInactiveBase}>{inactiveChild}</span> : null}
				{/* Icon Active */}
				{checked && activeChild ? <span className={iconActiveBase}>{activeChild}</span> : null}
			</div>
		</button>
	);
};
