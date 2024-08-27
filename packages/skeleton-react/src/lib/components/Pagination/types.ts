// import { ReactNode } from 'react';
import * as pagination from '@zag-js/pagination';

export interface PaginationProps extends Omit<pagination.Context, 'id'> {
	data: unknown[];
	titlePrevious?: string;
	titleNext?: string;

	// Root ---
	/** Sets base classes for the root. */
	base?: string;
	/** Provide arbitrary CSS classes for the root. */
	classes?: string;

	// List ---
	/** Sets base classes for the list. */
	listBase?: string;
	/** Sets background classes for the list. */
	listBackground?: string;
	/** Sets border classes for the list. */
	listBorder?: string;
	/** Sets gap classes for the list. */
	listGap?: string;
	/** Sets padding classes for the list. */
	listPadding?: string;
	/** Sets border radius classes for the list. */
	listRounded?: string;
	/** Provide arbitrary CSS classes for the root. */
	listClasses?: string;

	// Buttons ---
	buttonBase?: string;
	buttonInactive?: string;
	buttonHover?: string;
	buttonActive?: string;
	buttonClasses?: string;
}
