import { createContext } from 'react';
import type {
	RatingGroupRootContext as RatingGroupRootContextType,
	RatingGroupItemContext as RatingGroupItemContextType
} from './types.js';

const RatingGroupRootContext = createContext<RatingGroupRootContextType>(null!);
const RatingGroupItemContext = createContext<RatingGroupItemContextType>(null!);

export { RatingGroupRootContext, RatingGroupItemContext };
