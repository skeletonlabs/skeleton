import { createContext } from '@/internal/create-context';
import type { ItemState } from '@zag-js/rating-group';

export interface RatingGroupItemContextType {
	itemState: ItemState;
}

export const RatingGroupItemContext = createContext<RatingGroupItemContextType>();
