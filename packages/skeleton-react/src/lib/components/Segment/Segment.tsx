'use client';

import React, { createContext, useContext, useId } from 'react';
import * as radio from '@zag-js/radio-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { SegmentContextState, SegmentProps, SegmentItemsProps } from './types.js';
import { noop } from '$lib/internal/noop.js';

// Contexts ---

export const SegmentContext = createContext<SegmentContextState>({
	api: {} as ReturnType<typeof radio.connect>
});

// Components ---

const SegmentRoot: React.FC<SegmentProps> = ({
	// Root
	base = 'inline-flex items-stretch overflow-hidden',
	background = 'preset-outlined-surface-200-800',
	border = 'p-2',
	gap = 'gap-2',
	padding = '',
	rounded = 'rounded-container',
	width = '',
	classes = '',
	// Indicator
	indicatorBase = 'top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]',
	indicatorBg = 'preset-filled',
	indicatorRounded = 'rounded',
	indicatorClasses = '',
	// Events
	onValueChange = noop,
	// Children
	children,
	// Zag
	...zagProps
}) => {
	const [state, send] = useMachine(
		radio.machine({
			id: useId(),
			onValueChange: (details) => {
				onValueChange(details.value);
			}
		}),
		{ context: zagProps }
	);
	const api = radio.connect(state, send, normalizeProps);

	// Set Context
	const ctx = { api };

	// Reactive
	// FIXME: always returns vertical
	// const rxOrientation = state.context.orientation === 'vertical' ? 'flex-col' : 'flex-row';
	const rxOrientation = 'flex-row';

	return (
		<div
			{...api.getRootProps()}
			className={`${base} ${rxOrientation} ${background} ${border} ${padding} ${gap} ${rounded} ${width} ${classes}`}
			data-testid="segment"
		>
			{/* Indicator */}
			<div {...api.getIndicatorProps()} className={`${indicatorBase} ${indicatorBg} ${indicatorRounded} ${indicatorClasses}`}></div>
			{/* Items */}
			<SegmentContext.Provider value={ctx}>{children}</SegmentContext.Provider>
		</div>
	);
};

const SegmentItem: React.FC<SegmentItemsProps> = ({
	value,
	// Root
	base = 'btn cursor-pointer z-[1]',
	classes = '',
	// Label
	labelBase = 'pointer-events-none',
	labelActiveText = 'preset-filled',
	labelClasses = '',
	// Children
	children
}) => {
	// Get Context
	const ctx = useContext(SegmentContext);

	// Reactive
	const rxActive = ctx.api.value === value;
	const rxActiveText = rxActive ? labelActiveText : '';

	return (
		<label key={value} {...ctx.api.getItemProps({ value: value })} className={`${base} ${classes}`} data-testid="segment-item">
			{/* Label */}
			<span {...ctx.api.getItemTextProps({ value: value })} className={`${labelBase} ${rxActiveText} ${labelClasses}`}>
				{children}
			</span>
			{/* Hidden Input */}
			<input {...ctx.api.getItemHiddenInputProps({ value: value })} />
		</label>
	);
};

export const Segment = Object.assign(SegmentRoot, {
	Item: SegmentItem
});
