'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { SegmentContextState, SegmentProps, SegmentItemsProps } from './types.js';

// Contexts ---

export const SegmentContext = createContext<SegmentContextState>({
	value: '',
	name: '',
	onSelectionHandler: () => {}
});

// Components ---

const SegmentRoot: React.FC<SegmentProps> = ({
	value = '',
	name = '',
	// Root
	base = 'inline-flex items-stretch overflow-hidden',
	background = 'preset-outlined-surface-200-800',
	border = 'p-2',
	flexDirection = 'flex-row', // vertical: flex-col
	gap = 'gap-2',
	padding = '',
	rounded = 'rounded-container',
	width = '',
	classes = '',
	// Events
	onChange,
	// Children
	children
}) => {
	function onSelectionHandler(newValue: string) {
		value = newValue;
		if (onChange) onChange(newValue);
	}

	// Set Context
	const ctx = {
		value,
		name,
		onSelectionHandler
	};

	return (
		<div
			role="radiogroup"
			className={`${base} ${flexDirection} ${background} ${border} ${padding} ${gap} ${rounded} ${width} ${classes}`}
			data-testid="segment"
		>
			<SegmentContext.Provider value={ctx}>{children}</SegmentContext.Provider>
		</div>
	);
};

const SegmentItem: React.FC<SegmentItemsProps> = ({
	id,
	value,
	title,
	disabled = false,
	// Root
	base = 'btn',
	active = 'preset-filled',
	hover = 'hover:preset-tonal',
	classes = '',
	// Label
	labelBase = 'pointer-events-none',
	labelClasses = '',
	// Events
	onClick,
	// Children
	children
}) => {
	// Get Context
	const ctx = useContext<SegmentContextState>(SegmentContext);

	// Reactive
	const [selected, setSelected] = useState(value === ctx.value);
	const [rxActive, setRxActive] = useState(selected ? active : hover);

	useEffect(() => {
		setSelected(value === ctx.value);
	}, [value, ctx.value]);

	useEffect(() => {
		setRxActive(selected ? active : hover);
	}, [selected, active, hover]);

	function onClickHandler() {
		ctx.onSelectionHandler(value);
		onClick?.(value);
	}

	return (
		<button
			role="radio"
			aria-checked={selected}
			onClick={onClickHandler}
			type="button"
			className={`${base} ${rxActive} ${classes}`}
			title={title}
			disabled={disabled}
			data-testid="segment-item"
		>
			{/* Input */}
			{selected ? <input type="hidden" name={ctx.name} id={id} value={value} /> : null}
			{/* Label */}
			<label className={`${labelBase} ${labelClasses}`}>{children}</label>
		</button>
	);
};

export const Segment = Object.assign(SegmentRoot, {
	Item: SegmentItem
});
