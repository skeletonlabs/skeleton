'use client';

import React, { useId } from 'react';
import * as zagSwitch from '@zag-js/switch';
import { useMachine, normalizeProps } from '@zag-js/react';
import { SwitchProps } from './types.js';
import { noop } from '../../internal/noop.js';

export const Switch: React.FC<SwitchProps> = ({
	name = '',
	checked = false,
	disabled = false,
	compact = false,
	// Root (Track)
	base = 'inline-flex items-center gap-4',
	// State
	stateFocused = '[&>span]:focused',
	classes = '',
	// Control
	controlBase = 'cursor-pointer transition duration-200',
	controlInactive = 'preset-filled-surface-200-800',
	controlActive = 'preset-filled-primary-500',
	controlDisabled = 'opacity-50 cursor-not-allowed',
	controlWidth = 'w-10',
	controlHeight = 'h-6',
	controlPadding = 'p-0.5',
	controlRounded = 'rounded-full',
	controlHover = 'hover:brightness-90 dark:hover:brightness-110',
	controlClasses = '',
	// Thumb
	thumbBase = 'right-0 aspect-square h-full flex justify-center items-center text-right cursor-pointer',
	thumbInactive = 'preset-filled-surface-50-950',
	thumbActive = 'bg-surface-50 text-surface-contrast-50',
	thumbRounded = 'rounded-full',
	thumbTranslateX = 'translate-x-4 rtl:-translate-x-4',
	thumbTransition = 'transition',
	thumbEase = 'ease-in-out',
	thumbDuration = 'duration-200',
	thumbClasses = '',
	// Label
	labelBase = '',
	labelClasses = '',
	// Icons
	iconInactiveBase = 'pointer-events-none',
	iconActiveBase = 'pointer-events-none',
	// Events
	onCheckedChange = noop,
	// Children
	children,
	inactiveChild,
	activeChild
}) => {
	// Zag
	const [state, send] = useMachine(
		zagSwitch.machine({
			id: useId(),
			name,
			disabled,
			checked,
			onCheckedChange: (details) => onCheckedChange(details.checked)
		})
	);
	const api = zagSwitch.connect(state, send, normalizeProps);

	// Set Compact Mode
	if (compact) {
		controlBase = thumbBase;
		// Removes the height class
		controlHeight = '';
		// Thumb inherits track styles
		thumbInactive = controlInactive;
		thumbActive = controlActive;
		// Remove X-axis translate
		thumbTranslateX = '';
		// Remove padding
		controlPadding = '';
	}

	const rxTrackState = api.checked ? controlActive : controlInactive;
	const rxThumbState = api.checked ? `${thumbActive} ${thumbTranslateX}` : thumbInactive;
	const rxDisabled = api.disabled ? controlDisabled : '';
	const rxFocused = api.focused ? stateFocused : '';

	return (
		<label {...api.getRootProps()} className={`${base} ${rxFocused} ${classes}`} data-testid="switch">
			{/* Input */}
			<input {...api.getHiddenInputProps()} data-testid="switch-input" />
			{/* Control */}
			<span
				{...api.getControlProps()}
				className={`${controlBase} ${rxTrackState} ${controlWidth} ${controlHeight} ${controlPadding} ${controlRounded} ${controlHover} ${rxDisabled}  ${controlClasses}`}
				data-testid="switch-control"
			>
				{/* Thumb */}
				<span
					{...api.getThumbProps()}
					className={`${thumbBase} ${rxThumbState} ${thumbRounded} ${thumbTransition} ${thumbEase} ${thumbDuration} ${thumbClasses}`}
					data-testid="switch-thumb"
				>
					{/* Icon: Inactive */}
					{!checked && inactiveChild ? (
						<span className={iconInactiveBase} data-testid="switch-icon-inactive">
							{inactiveChild}
						</span>
					) : null}
					{/* Icon: Active */}
					{checked && activeChild ? (
						<span className={iconActiveBase} data-testid="switch-icon-active">
							{activeChild}
						</span>
					) : null}
				</span>
			</span>
			{/* Label */}
			<span {...api.getLabelProps()} className={`${labelBase} ${labelClasses}`} data-testid="switch-label">
				{children}
			</span>
		</label>
	);
};
