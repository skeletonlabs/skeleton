'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RatingProps } from './types';

// Components ---
export const Rating: React.FC<RatingProps> = ({
	value = 0,
	max = 5,
	interactive = false,
	step = 1,
	// Root
	base = 'flex',
	width = 'w-full',
	justify = 'justify-center',
	spaceX = 'space-x-2',
	classes = '',
	// Item ---
	buttonBase = 'w-full h-full',
	buttonPosition = 'relative',
	buttonAspect = 'aspect-square',
	buttonClasses = '',
	// Icon Empty
	emptyBase = 'absolute left-0 top-0 flex items-center justify-center',
	emptyClip = '[clip-path:inset(0_0_0_var(--clipValue))] rtl:[clip-path:inset(0_var(--clipValue)_0_0)]',
	emptyInteractive = 'size-full',
	emptyStatic = 'w-fit',
	emptyClasses = '',
	// Icon Full
	fullBase = 'absolute left-0 top-0 flex items-center justify-center',
	fullClip = '[clip-path:inset(0_var(--clipValue)_0_0)] rtl:[clip-path:inset(0_0_0_var(--clipValue))]',
	fullInteractive = 'size-full',
	fullStatic = 'w-fit',
	fullClasses = '',
	// Events
	onMouseDown = () => {},
	onKeyDown = () => {},
	onValueChange = () => {},
	// Children
	iconEmpty,
	iconFull
}) => {
	const figureRef = useRef<HTMLElement>(null);
	const valueRef = useRef(value);

	const [focusedButtonIndex, setFocusedButtonIndex] = useState(0);
	const [rxEmptyInteractive, setRxEmptyInteractive] = useState('');
	const [rxFullInteractive, setRxFullInteractive] = useState('');

	useEffect(() => {
		const index = Math.max(0, Math.ceil(value - 1));
		setFocusedButtonIndex(index);
	}, [value]);

	useEffect(() => {
		setRxEmptyInteractive(interactive ? emptyInteractive : emptyStatic);
		setRxFullInteractive(interactive ? fullInteractive : fullStatic);
	}, [interactive, emptyInteractive, emptyStatic, fullInteractive, fullStatic]);

	const onRatingMouseDown = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>, order: number) => {
			if (!figureRef.current) return;

			const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const fractionWidth = ratingRect.width / step;
			const left = event.clientX - ratingRect.left;
			let selectedFraction = Math.floor(left / fractionWidth) + 1;

			if (getComputedStyle(figureRef.current).direction === 'rtl') {
				selectedFraction = step - selectedFraction + 1;
			}

			valueRef.current = order + selectedFraction / step;
			onValueChange(valueRef.current);
			onMouseDown(event, valueRef.current);
		},
		[step, onMouseDown, onValueChange]
	);

	// https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio-rating/#kbd_label
	const onRatingKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
		// If functions are not used outside of an effect/callback, they need to be defined in the effect/callback
		function increaseValue() {
			valueRef.current = Math.min(max, valueRef.current + 1 / step);
			onValueChange(valueRef.current);
			refreshFocus();
		}

		function decreaseValue() {
			valueRef.current = Math.max(0, valueRef.current - 1 / step);
			onValueChange(valueRef.current);
			refreshFocus();
		}

		function refreshFocus() {
			if (!figureRef.current) return;

			const buttons = figureRef.current.querySelectorAll('button');
			buttons[Math.max(0, Math.ceil(valueRef.current - 1))].focus();
		}

		if (!figureRef.current) return;
		const rtl = getComputedStyle(figureRef.current).direction === 'rtl';
		if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
			event.preventDefault();
			rtl ? increaseValue() : decreaseValue();
		}
		if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
			event.preventDefault();
			rtl ? decreaseValue() : increaseValue();
		}
		onKeyDown(event);
	}, [onKeyDown, max, onValueChange, step]);

	return (
		<figure ref={figureRef} className={`${base} ${width} ${justify} ${spaceX} ${classes}`} data-testid="rating">
			{[...Array(max)].map((_, order) => (
				<button
					className={`${buttonBase} ${buttonPosition} ${buttonAspect} ${buttonClasses} ${interactive ? undefined : 'pointer-events-none'}`}
					tabIndex={interactive && order === focusedButtonIndex ? 0 : -1}
					onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => (interactive ? onRatingMouseDown(event, order) : undefined)}
					onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => (interactive ? onRatingKeyDown(event) : undefined)}
					type="button"
					key={order}
				>
					<span
						className={`${emptyBase} ${emptyClip} ${rxEmptyInteractive} ${emptyClasses}`}
						style={
							{
								'--clipValue': `${(value - order) * 100}%`
							} as React.CSSProperties
						}
						data-testid="rating-iconempty"
					>
						{iconEmpty}
					</span>
					<span
						className={`${fullBase} ${fullClip} ${rxFullInteractive} ${fullClasses}`}
						style={
							{
								'--clipValue': `${100 - (value - order) * 100}%`
							} as React.CSSProperties
						}
						data-testid="rating-iconfull"
					>
						{iconFull}
					</span>
				</button>
			))}
		</figure>
	);
};
