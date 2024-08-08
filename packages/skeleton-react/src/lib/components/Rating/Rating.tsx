import * as rating from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, type FC } from 'react';
import type { RatingProps } from './types';
import { starEmpty, starHalf, starFull } from '$lib/internal/nodes';
import { noop } from '$lib/internal/noop';

export const Rating: FC<RatingProps> = ({
	base = 'flex gap-1',
	classes,
	labelBase,
	labelClasses,
	itemBase = 'cursor-pointer data-[disabled]:cursor-not-allowed data-[readonly]:cursor-default',
	itemClasses,
	onChange = noop,
	label,
	iconEmpty = starEmpty,
	iconHalf = starHalf,
	iconFull = starFull,
	...zagProps
}) => {
	const [state, send] = useMachine(rating.machine({ 
		id: useId(), 
		onValueChange: (details) => onChange(details.value) 
	}), {
		context: zagProps
	});

	const api = rating.connect(state, send, normalizeProps);

	return (
		<div {...api.getRootProps()}>
			{!!label && (
				<label className={`${labelBase} ${labelClasses}`} {...api.getLabelProps()}>
					{label}
				</label>
			)}
			<div className={`${base} ${classes}`} {...api.getControlProps()}>
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
