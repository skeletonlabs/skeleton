import { FC, useId } from 'react';

import * as pagination from '@zag-js/pagination';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({
	data,
	titlePrevious,
	titleNumeral,
	titleNext,
	// Root
	base = 'inline-flex items-stretch overflow-hidden',
	background = 'preset-outlined-surface-200-800',
	border = 'p-2',
	gap = 'gap-2',
	padding = '',
	rounded = 'rounded-container',
	classes = '',
	// Buttons
	buttonBase = 'btn',
	buttonActive = 'preset-filled',
	buttonInactive = 'preset-tonal',
	buttonHover = 'hover:preset-filled',
	buttonClasses = '',
	// Children
	labelPrevious = '\u2190',
	labelEllipsis = '\u22EF',
	labelNext = '\u2192',
	// Zag
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(pagination.machine({ id: useId(), count: data.length }), { context: zagProps });
	const api = pagination.connect(state, send, normalizeProps);

	// Reactive
	const rxButtonActive = (page: { value: number }) => {
		return state.context.page === page.value ? buttonActive : `${buttonInactive} ${buttonHover}`;
	};

	return (
		<>
			{api.totalPages > 1 && (
				<div
					{...api.getRootProps()}
					className={`${base} ${background} ${border} ${gap} ${padding} ${rounded} ${classes}`}
					data-testid="pagination"
				>
					{/* Button Prev */}
					<button
						type="button"
						{...api.getPrevTriggerProps()}
						className={`${buttonBase} ${buttonInactive} ${buttonHover} ${buttonClasses}`}
						title={titlePrevious}
						disabled={api.page === 1}
						data-testid="pagination-button-previous"
					>
						{labelPrevious}
					</button>
					{/* Numeral List */}
					{api.pages.map((page, i) => {
						if (page.type === 'page')
							return (
								// Numeral
								<button
									key={page.value}
									type="button"
									{...api.getItemProps(page)}
									className={`${buttonBase} ${rxButtonActive(page)} ${buttonClasses}`}
									title={titleNumeral && `${titleNumeral} ${page.value}`}
									data-testid="pagination-button-numeral"
								>
									{page.value}
								</button>
							);
						else
							return (
								// Ellipsis
								<span
									key={`ellipsis-${i}`}
									{...api.getEllipsisProps({ index: i })}
									className={`${buttonBase} ${buttonInactive} ${buttonClasses}`}
									data-testid="pagination-ellipsis"
								>
									{labelEllipsis}
								</span>
							);
					})}
					{/* Button Next */}
					<button
						type="button"
						{...api.getNextTriggerProps()}
						className={`${buttonBase} ${buttonInactive} ${buttonHover} ${buttonClasses}`}
						title={titleNext}
						disabled={!api.nextPage}
						data-testid="pagination-button-next"
					>
						{labelNext}
					</button>
				</div>
			)}
		</>
	);
};
