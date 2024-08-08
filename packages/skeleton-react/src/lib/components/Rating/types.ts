import * as rating from '@zag-js/rating-group';
import type { ReactNode } from 'react';

export interface RatingProps extends Omit<rating.Context, 'id' | 'onValueChange'> {
	base?: string;
	classes?: string;
	labelBase?: string;
	labelClasses?: string;
	itemBase?: string;
	itemClasses?: string;
	iconEmpty?: ReactNode;
	iconHalf?: ReactNode;
	iconFull?: ReactNode;
	label?: ReactNode;
	onValueChange?: (value: number) => void;
}
