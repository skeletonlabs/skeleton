import * as rating from '@zag-js/rating-group';
import type { Snippet } from 'svelte';

export interface RatingProps extends Omit<rating.Context, 'id'> {
	base?: string;
	classes?: string;
	labelBase?: string;
	labelClasses?: string;
	itemBase?: string;
	itemClasses?: string;
	iconEmpty?: Snippet;
	iconHalf?: Snippet;
	iconFull?: Snippet;
	label?: Snippet;
}
