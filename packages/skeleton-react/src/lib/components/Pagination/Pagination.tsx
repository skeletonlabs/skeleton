import { FC, useId } from 'react';

import * as pagination from '@zag-js/pagination';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { PaginationProps } from './types';
// import { noop } from '../../internal/noop.js';

export const Pagination: FC<PaginationProps> = ({
	data,
	titlePrevious = 'Previous',
	titleNext = 'Next',
	// Root
	base = 'inline-block',
	classes = '',
	// List
	listBase = 'w-full inline-flex items-stretch overflow-hidden',
	listBackground = 'preset-outlined-surface-200-800',
	listBorder = 'p-2',
	listGap = 'gap-2',
	listPadding = '',
	listRounded = 'rounded-container',
	listClasses = '',
	// Buttons
	buttonBase = 'btn',
	buttonActive = 'preset-filled',
	buttonInactive = 'preset-tonal',
	buttonHover = 'hover:preset-filled',
	buttonClasses = '',
	// Zag
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(pagination.machine({ id: useId(), count: data.length }), { context: zagProps });
	const api = pagination.connect(state, send, normalizeProps);

	// Reactive
	const rxButtonActive = (page: { value: number }) => {
		return state.context.page === page.value ? buttonActive : buttonInactive;
	};

	return (
		<>
			{api.totalPages > 1 && (
				<nav {...api.getRootProps()} className={`${base} ${classes}`}>
					{/* List */}
					<ul className={`${listBase} ${listBackground} ${listBorder} ${listGap} ${listPadding} ${listRounded} ${listClasses}`}>
						{/* Button Prev */}
						<li>
							<button
								type="button"
								{...api.getPrevTriggerProps()}
								className={`${buttonBase} ${buttonInactive} ${buttonHover} ${buttonClasses}`}
								title={titlePrevious}
								disabled={api.page === 1}
							>
								&larr;
							</button>
						</li>
						{/* Nuermals */}
						{api.pages.map((page, i) => {
							if (page.type === 'page')
								return (
									// Numeral
									<li key={page.value}>
										<a
											href={`#${page.value}`}
											{...api.getItemProps(page)}
											className={`${buttonBase} $${buttonHover} ${rxButtonActive(page)} ${buttonClasses}`}
										>
											{page.value}
										</a>
									</li>
								);
							else
								return (
									// Ellipsis
									<li key={`ellipsis-${i}`}>
										<span {...api.getEllipsisProps({ index: i })} className={`${buttonBase} ${buttonInactive} ${buttonClasses}`}>
											&#8230;
										</span>
									</li>
								);
						})}
						{/* Button Next */}
						<li>
							<button
								type="button"
								{...api.getNextTriggerProps()}
								className={`${buttonBase} ${buttonInactive} ${buttonHover} ${buttonClasses}`}
								title={titleNext}
								disabled={!api.nextPage}
							>
								&rarr;
							</button>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};
