import * as rating from '@zag-js/rating-group';
import type { Snippet } from 'svelte';
export interface RatingContext {
	api: ReturnType<typeof rating.connect>;
}

export interface RatingProps extends Omit<rating.Context, 'id'> {
	base?: string;
	classes?: string;
	labelBase?: string;
	labelClasses?: string;
	children?: Snippet;
	label?: Snippet;
}

export interface RatingItemProps extends rating.ItemProps {
	base?: string;
	classes?: string;
	iconEmpty?: Snippet;
	iconHalf?: Snippet;
	iconFull?: Snippet;
}
