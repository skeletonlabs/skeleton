import { createContext } from '../../../internal/create-context.js';
import type { useRatingGroup } from './provider.js';

export const RatingGroupRootContext = createContext<ReturnType<typeof useRatingGroup>>();
