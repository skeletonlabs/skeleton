'use client';

import React, { useId } from 'react';
import * as zagSwitch from '@zag-js/switch';
import { useMachine, normalizeProps } from '@zag-js/react';
import { SwitchProps } from './types.js';

export const Switch: React.FC<SwitchProps> = ({
	compact = false,
	// Root (Track)
	base = 'inline-flex items-center gap-4',
	// State
	stateFocused = 'data-[focus-visible]:focused',
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
	// Children
	children,
	inactiveChild,
	activeChild,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(zagSwitch.machine, {
		id: useId(),
		...zagProps
	});
	const api = zagSwitch.connect(service, normalizeProps);

	const rxControlBase = compact ? thumbBase : controlBase;
	const rxControlHeight = compact ? '' : controlHeight;
	const rxControlPadding = compact ? '' : controlPadding;
	const rxThumbInactive = compact ? controlInactive : thumbInactive;
	const rxThumbActive = compact ? controlActive : thumbActive;
	const rxThumbTranslateX = compact ? '' : thumbTranslateX;

	const rxTrackState = api.checked ? controlActive : controlInactive;
	const rxThumbState = api.checked ? `${rxThumbActive} ${rxThumbTranslateX}` : rxThumbInactive;
	const rxDisabled = api.disabled ? controlDisabled : '';
	const rxFocused = api.focused ? stateFocused : '';

	return (
		<label {...api.getRootProps()} className={`${base} ${classes}`} data-testid="switch">
			{/* Input */}
			<input {...api.getHiddenInputProps()} data-testid="switch-input" />
			{/* Control */}
			<span
				{...api.getControlProps()}
				className={`${rxControlBase} ${rxTrackState} ${rxFocused} ${controlWidth} ${rxControlHeight} ${rxControlPadding} ${controlRounded} ${controlHover} ${rxDisabled}  ${controlClasses}`}
				data-testid="switch-control"
			>
				{/* Thumb */}
				<span
					{...api.getThumbProps()}
					className={`${thumbBase} ${rxThumbState} ${thumbRounded} ${thumbTransition} ${thumbEase} ${thumbDuration} ${thumbClasses}`}
					data-testid="switch-thumb"
				>
					{/* Icon: Inactive */}
					{!api.checked && inactiveChild ? (
						<span className={iconInactiveBase} data-testid="switch-icon-inactive">
							{inactiveChild}
						</span>
					) : null}
					{/* Icon: Active */}
					{api.checked && activeChild ? (
						<span className={iconActiveBase} data-testid="switch-icon-active">
							{activeChild}
						</span>
					) : null}
				</span>
			</span>
			{/* Label */}
			{children ? (
				<span {...api.getLabelProps()} className={`${labelBase} ${labelClasses}`} data-testid="switch-label">
					{children}
				</span>
			) : null}
		</label>
	);
};
