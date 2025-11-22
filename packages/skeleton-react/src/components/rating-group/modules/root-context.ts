import { createContext } from '../../../internal/create-context.js';
import type { useRatingGroup } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useRatingGroup>>();
