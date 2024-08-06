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
	itemBase?: string;
	itemClasses?: string;
	children?: Snippet;
	label?: Snippet;
	iconEmpty?: Snippet;
	iconHalf?: Snippet;
	iconFull?: Snippet;
}
