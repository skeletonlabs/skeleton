'use client';

import { FC, createContext, useContext, useId } from 'react';
import * as radio from '@zag-js/radio-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { SegmentContextState, SegmentProps, SegmentItemsProps } from './types.js';
import { noop } from '../../internal/noop.js';

// Contexts ---

export const SegmentContext = createContext<SegmentContextState>({
	api: {} as ReturnType<typeof radio.connect>,
	indicatorText: ''
});

// Components ---

const SegmentRoot: FC<SegmentProps> = ({
	orientation = 'horizontal',
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
	indicatorText = 'text-surface-contrast-950 dark:text-surface-contrast-50',
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
			onValueChange: (details) => onValueChange(details.value),
			orientation
		}),
		{ context: zagProps }
	);
	const api = radio.connect(state, send, normalizeProps);

	// Set Context
	const ctx = { api, indicatorText };

	// Reactive
	const rxOrientation = state.context.orientation === 'vertical' ? 'flex-col' : 'flex-row';

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

const SegmentItem: FC<SegmentItemsProps> = ({
	value,
	// Root
	base = 'btn cursor-pointer z-[1]',
	classes = '',
	// Label
	labelBase = 'pointer-events-none transition-colors duration-100',
	labelClasses = '',
	// Children
	children
}) => {
	// Get Context
	const ctx = useContext(SegmentContext);

	// Reactive
	const rxActiveText = ctx.api.value === value ? ctx.indicatorText : '';

	return (
		<label {...ctx.api.getItemProps({ value: value })} className={`${base} ${classes}`} data-testid="segment-item">
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
