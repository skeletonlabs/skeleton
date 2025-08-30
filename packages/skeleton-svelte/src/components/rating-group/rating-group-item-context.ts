import type { ItemState } from '@zag-js/rating-group';
import { createContext } from '../../internal/create-context.js';

interface RatingGroupItemContextType {
	itemState: ItemState;
}

export const RatingGroupItemContext = createContext<RatingGroupItemContextType>();
