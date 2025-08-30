import { createContext } from '../../../internal/create-context.js';
import type { ItemState } from '@zag-js/rating-group';

interface RatingGroupItemContextType {
	itemState: ItemState;
}

export const RatingGroupItemContext = createContext<RatingGroupItemContextType>();
