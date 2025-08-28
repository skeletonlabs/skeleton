import * as rating from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, type FC } from 'react';
import type { RatingProps } from './types.js';

const starEmpty = (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" height="24" width="24">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
		/>
	</svg>
);

const starHalf = (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" height="24" width="24">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
		/>
		<defs>
			<linearGradient id="half-fill">
				<stop offset="50%" stopColor="currentColor" />
				<stop offset="50%" stopColor="transparent" />
			</linearGradient>
		</defs>
		<path
			fill="url(#half-fill)"
			d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
		/>
	</svg>
);

const starFull = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
		<path
			fillRule="evenodd"
			d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
			clipRule="evenodd"
		/>
	</svg>
);

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
