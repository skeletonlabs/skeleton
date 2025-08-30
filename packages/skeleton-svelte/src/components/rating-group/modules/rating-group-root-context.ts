import type { Api } from '@zag-js/rating-group';
import { createContext } from '../../../internal/create-context.js';

interface RatingGroupRootContextType {
	api: Api;
}

export const RatingGroupRootContext = createContext<RatingGroupRootContextType>();
