import { createContext } from '../../../internal/create-context.js';
import type {
	RatingGroupRootContext as RatingGroupRootContextType,
	RatingGroupItemContext as RatingGroupItemContextType
} from './types.js';

const RatingGroupRootContext = createContext<RatingGroupRootContextType>();
const RatingGroupItemContext = createContext<RatingGroupItemContextType>();

export { RatingGroupRootContext, RatingGroupItemContext };
