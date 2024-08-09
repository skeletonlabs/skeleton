import * as rating from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, type FC } from 'react';
import type { RatingProps } from './types';
import { starEmpty, starHalf, starFull } from '../../internal/nodes';
import { noop } from '../../internal/noop';

export const Rating: FC<RatingProps> = ({
	// Root
	base = 'flex gap-1',
	disabledClasses = 'cursor:not-allowed opacity-50',
	readOnlyClasses = 'cursor:not-allowed opacity-50',
	classes,
	// Label
	labelBase,
	labelClasses,
	// Item
	itemBase = 'cursor-pointer data-[disabled]:cursor-not-allowed data-[readonly]:cursor-default',
	itemClasses,
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
	const [state, send] = useMachine(
		rating.machine({
			id: useId(),
			onValueChange: (details) => onValueChange(details.value)
		}),
		{
			context: zagProps
		}
	);

	const api = rating.connect(state, send, normalizeProps);

	const rxDisabledClasses = state.context.disabled ? disabledClasses : '';
	const rxReadOnlyClasses = state.context.readOnly ? readOnlyClasses : '';

	return (
		<div {...api.getRootProps()}>
			{!!label && (
				<label className={`${labelBase} ${labelClasses}`} {...api.getLabelProps()}>
					{label}
				</label>
			)}
			<div className={`${base} ${rxDisabledClasses} ${rxReadOnlyClasses} ${classes}`} {...api.getControlProps()}>
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
						<span key={index} className={`${itemBase} ${itemClasses}`} {...api.getItemProps({ index })}>
							{icon}
						</span>
					);
				})}
			</div>
			<input {...api.getHiddenInputProps()} />
		</div>
	);
};
