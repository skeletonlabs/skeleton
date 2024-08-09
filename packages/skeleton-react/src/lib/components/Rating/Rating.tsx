import * as rating from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, type FC } from 'react';
import type { RatingProps } from './types';
import { starEmpty, starHalf, starFull } from '../../internal/nodes';
import { noop } from '../../internal/noop';

export const Rating: FC<RatingProps> = ({
	// Root
	base = '',
	classes = '',
	// Control
	controlBase = 'flex',
	controlGap = 'gap-2',
	controlClasses,
	// Label
	labelBase = '',
	labelClasses = '',
	// Item
	itemBase = '',
	itemClasses = '',
	// State
	stateReadOnly = 'opacity-50',
	stateDisabled = 'cursor-not-allowed opacity-50',
	// Icons
	iconEmpty = starEmpty,
	iconHalf = starHalf,
	iconFull = starFull,
	// Children
	label,
	// Events
	onValueChange = noop,
	// Zag
	...zagProps
}) => {
	// Machine
	const [state, send] = useMachine(
		rating.machine({
			id: useId(),
			onValueChange: (details) => onValueChange(details.value)
		}),
		{
			context: zagProps
		}
	);

	// API
	const api = rating.connect(state, send, normalizeProps);

	// Reactive
	const rxReadOnly = state.context.readOnly ? stateReadOnly : '';
	const rxDisabled = state.context.disabled ? stateDisabled : '';

	return (
		<div {...api.getRootProps()} className={`${base} ${classes}`}>
			{/* Label */}
			{!!label && (
				<label className={`${labelBase} ${labelClasses}`} {...api.getLabelProps()}>
					{label}
				</label>
			)}
			{/* Control */}
			<div className={`${controlBase} ${controlGap} ${rxReadOnly} ${rxDisabled} ${controlClasses}`} {...api.getControlProps()}>
				{api.items.map((index) => {
					const itemState = api.getItemState({ index });
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
						<>
							{/* Item */}
							<span key={index} className={`${itemBase} ${itemClasses}`} {...api.getItemProps({ index })}>
								{icon}
							</span>
						</>
					);
				})}
			</div>
			{/* Hidden Input */}
			<input {...api.getHiddenInputProps()} />
		</div>
	);
};
