import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/rating-group';

export const RatingGroupRootContext = createContext<() => Api>();
