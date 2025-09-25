import type { useRatingGroup } from './use-rating-group';
import { createContext } from '@/internal/create-context';

export const RatingGroupRootContext = createContext<ReturnType<typeof useRatingGroup>>();
