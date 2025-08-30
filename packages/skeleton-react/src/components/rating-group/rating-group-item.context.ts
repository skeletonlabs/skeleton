import { createContext } from 'react';
import type { ItemState } from '@zag-js/rating-group';

interface RatingGroupItemContextType {
	itemState: ItemState;
}

export const RatingGroupItemContext = createContext<RatingGroupItemContextType>(null!);
