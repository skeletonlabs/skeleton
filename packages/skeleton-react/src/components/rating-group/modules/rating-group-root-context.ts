import { createContext } from 'react';
import type { Api } from '@zag-js/rating-group';

export interface RatingGroupRootContextType {
	api: Api;
}

export const RatingGroupRootContext = createContext<RatingGroupRootContextType>(null!);
