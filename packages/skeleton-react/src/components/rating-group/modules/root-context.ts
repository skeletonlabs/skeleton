import { createContext } from '@/internal/create-context';

import type { useRatingGroup } from './use-rating-group';

export const RatingGroupRootContext = createContext<ReturnType<typeof useRatingGroup>>();
