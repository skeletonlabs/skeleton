import React, { useRef, useState } from 'react';
import type { SegmentProps, SegmentItemsProps } from './types.js';

const SegmentRoot: React.FC<SegmentProps> = ({
	base = 'inline-flex items-stretch overflow-hidden',
	background = 'preset-outlined-surface-200-800',
	border = 'p-2',
	flexDirection = 'flex-row', // vertical: flex-col
	gap = 'gap-2',
	padding = '',
	rounded = 'rounded-container',
	width = '',
	classes = '',
	// Children
	children
}) => {
	return (
		<div role="radiogroup" className={`${base} ${flexDirection} ${background} ${border} ${padding} ${gap} ${rounded} ${width} ${classes}`}>
			{children}
		</div>
	);
};

const SegmentItem: React.FC<SegmentItemsProps> = ({
	group,
	name,
	value,
	title,
	disabled = false,
	// Root
	base = 'btn',
	active = 'preset-filled',
	hover = 'hover:preset-tonal',
	classes = '',
	// Input
	// FIXME: non-functional when the input is visibly hidden:
	checkboxBase = '', // 'hidden absolute pointer-events-none',
	// Label
	labelBase = 'pointer-events-none',
	labelClasses = '',
	// Events
	onChange,
	// Children
	children
}) => {
	// Ref
	const elemCheckbox = useRef<HTMLInputElement>(null);

	// Reactive
	const [checked] = useState(group === value);
	const [rxActive] = useState(checked ? active : hover);

	function onClickHandler() {
		group = value;
		if (elemCheckbox.current) elemCheckbox.current.checked = true;
	}

	function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		if (onChange) onChange(event.target.value);
	}

	return (
		<button onClick={onClickHandler} type="button" className={`${base} ${rxActive} ${classes}`} title={title} disabled={disabled}>
			{/* Checkbox (hidden) */}
			<input
				className={checkboxBase}
				type="radio"
				ref={elemCheckbox}
				name={name}
				value={value}
				checked={checked}
				onChange={onChangeHandler}
				tabIndex={-1}
			/>
			{/* Label */}
			<label className={`${labelBase} ${labelClasses}`}>{children}</label>
		</button>
	);
};

export const Segment = Object.assign(SegmentRoot, {
	Item: SegmentItem
});
