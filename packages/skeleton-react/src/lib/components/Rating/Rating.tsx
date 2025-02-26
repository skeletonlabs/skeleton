'use client';

import * as rating from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, type FC } from 'react';
import type { RatingProps } from './types';
import { starEmpty, starHalf, starFull } from '../../internal/nodes';

export const Rating: FC<RatingProps> = ({
	// Root
	base = '',
	classes = '',
	// Control
	controlBase = 'flex',
	controlGap = 'gap-2',
	controlClasses,
	// Label
	labelBase = 'label-text',
	labelClasses = '',
	// Item
	itemBase = 'cursor-pointer',
	itemClasses = '',
	// State
	stateReadOnly = '',
	stateDisabled = 'cursor-not-allowed opacity-50',
	// Icons
	iconEmpty = starEmpty,
	iconHalf = starHalf,
	iconFull = starFull,
	// Children
	label,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(rating.machine, {
		id: useId(),
		...zagProps
	});
	const api = rating.connect(service, normalizeProps);

	// Reactive
	const rxReadOnly = service.prop('readOnly') ? stateReadOnly : '';
	const rxDisabled = service.prop('disabled') ? stateDisabled : '';

	return (
		<div {...api.getRootProps()} className={`${base} ${classes}`} data-testid="rating">
			{/* Label */}
			{!!label && (
				<label {...api.getLabelProps()} className={`${labelBase} ${labelClasses}`} data-testid="rating-label">
					{label}
				</label>
			)}
			{/* Control */}
			<div
				{...api.getControlProps()}
				className={`${controlBase} ${controlGap} ${rxReadOnly} ${rxDisabled} ${controlClasses}`}
				data-testid="rating-control"
			>
				{api.items.map((item) => {
					const itemState = api.getItemState({ index: item });
					const icon = (() => {
						if (!itemState.highlighted) {
							return iconEmpty;
						} else if (itemState.half) {
							return iconHalf;
						} else {
							return iconFull;
						}
					})();
					return (
						<span key={item} {...api.getItemProps({ index: item })} className={`${itemBase} ${itemClasses}`} data-testid="rating-item">
							{/* Item */}
							{icon}
						</span>
					);
				})}
			</div>
			{/* Hidden Input */}
			<input {...api.getHiddenInputProps()} data-testid="rating-input" />
		</div>
	);
};
