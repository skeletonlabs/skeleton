import { ReactNode } from 'react';
import * as pagination from '@zag-js/pagination';

export interface PaginationProps extends Omit<pagination.Context, 'id' | 'count'> {
	// Provide source data as an array.
	data: unknown[];
	/** Total number of data items. Required for server-side pagination. */
	count?: number;

	// Enables alternative display with stats and first/last buttons.
	alternative?: boolean;
	/** Set the separator text or character, such as "of" in "X of Y". */
	textSeparator?: string;
	/** Show first and last page button. */
	showFirstLastButtons?: boolean;

	/** Set an optional title for the first button. */
	titleFirst?: string;
	/** Set an optional title for the previous button. */
	titlePrevious?: string;
	/** Set an optional title for the numeral buttons (ex: Page 1). */
	titleNumeral?: string;
	/** Set an optional title for the next button. */
	titleNext?: string;
	/** Set an optional title for the last button. */
	titleLast?: string;

	// Root ---
	/** Sets base classes for the list. */
	base?: string;
	/** Sets background classes for the list. */
	background?: string;
	/** Sets border classes for the list. */
	border?: string;
	/** Sets gap classes for the list. */
	gap?: string;
	/** Sets padding classes for the list. */
	padding?: string;
	/** Sets border radius classes for the list. */
	rounded?: string;
	/** Provide arbitrary CSS classes for the root. */
	classes?: string;

	// Buttons ---
	/** Sets base classes for buttons. */
	buttonBase?: string;
	/** Sets active state classes for buttons. */
	buttonActive?: string;
	/** Sets inactive state classes for buttons. */
	buttonInactive?: string;
	/** Sets hover state classes for buttons. */
	buttonHover?: string;
	/** Provide arbitrary CSS classes for buttons. */
	buttonClasses?: string;

	// Children ---
	/** Set button icon or label for first button. */
	labelFirst?: ReactNode;
	/** Set button icon or label for previous button. */
	labelPrevious?: ReactNode;
	/** Set button icon or label for ellipsis. */
	labelEllipsis?: ReactNode;
	/** Set button icon or label for next button. */
	labelNext?: ReactNode;
	/** Set button icon or label for last button. */
	labelLast?: ReactNode;
}
