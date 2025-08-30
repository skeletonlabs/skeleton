import type { Api } from '@zag-js/rating-group';
import { createContext } from '../../internal/create-context.js';

interface RatingGroupRootContextType {
	api: Api;
}

const RatingGroupRootContext = createContext<RatingGroupRootContextType>();

export { RatingGroupRootContext };
