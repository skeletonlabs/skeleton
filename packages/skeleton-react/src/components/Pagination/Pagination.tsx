import { type FC, useId } from 'react';

import * as pagination from '@zag-js/pagination';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { PaginationProps } from './types.js';

export const Pagination: FC<PaginationProps> = ({
	data,
	alternative = false,
	textSeparator = 'of',
	showFirstLastButtons = false,
	// Titles
	titleFirst,
	titlePrevious,
	titleNumeral,
	titleNext,
	titleLast,
	// Root
	base = 'inline-flex items-stretch overflow-hidden',
	background = 'preset-outlined-surface-200-800',
	border = '',
	gap = 'gap-2',
	padding = 'p-2',
	rounded = 'rounded-container',
	classes = '',
	// Buttons
	buttonBase = 'btn',
	buttonActive = 'preset-filled',
	buttonInactive = 'preset-tonal',
	buttonHover = 'hover:preset-filled',
	buttonClasses = '',
	// Children
	labelFirst = '\u00AB',
	labelPrevious = '\u2190',
	labelEllipsis = '\u22EF',
	labelNext = '\u2192',
	labelLast = '\u00BB',
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(pagination.machine, {
		id: useId(),
		count: zagProps.count ?? data.length,
		...zagProps
	});
	const api = pagination.connect(service, normalizeProps);

	// Reactive
	const rxButtonActive = (page: { value: number }) => {
		return service.prop('page') === page.value ? buttonActive : `${buttonInactive} ${buttonHover}`;
	};

	return (
		<>
			{api.totalPages > 1 && (
				<div
					{...api.getRootProps()}
					className={`${base} ${background} ${border} ${gap} ${padding} ${rounded} ${classes}`}
					data-testid="pagination"
				>
					{/* Button: First Page */}
					{showFirstLastButtons && (
						<button
							type="button"
							onClick={api.goToFirstPage}
							className={`${buttonBase} ${buttonInactive} ${buttonHover} ${buttonClasses}`}
							title={titleFirst}
							disabled={api.page === 1}
							data-testid="pagination-button-first"
						>
							{labelFirst}
						</button>
					)}
					{/* Button: Previous Page */}
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
					{!alternative &&
						api.pages.map((page, i) => {
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
					{/* Alternative Interface */}
					{alternative && (
						<span className={`${buttonBase} ${buttonInactive} ${buttonClasses}`} data-testid="pagination-alt-ui">
							<span>
								{api.pageRange.start + 1} - {api.pageRange.end}
							</span>
							<span className="opacity-60">
								{api.page} {textSeparator} {api.totalPages}
							</span>
						</span>
					)}
					{/* Button: Next Page */}
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
					{/* Button: Last Page */}
					{showFirstLastButtons && (
						<button
							type="button"
							onClick={api.goToLastPage}
							className={`${buttonBase} ${buttonInactive} ${buttonHover} ${buttonClasses}`}
							title={titleLast}
							disabled={!api.nextPage}
							data-testid="pagination-button-last"
						>
							{labelLast}
						</button>
					)}
				</div>
			)}
		</>
	);
};
