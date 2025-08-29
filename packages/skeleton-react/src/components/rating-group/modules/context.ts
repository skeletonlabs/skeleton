import { createContext } from 'react';
import type { RatingGroupRootContext as RatingGroupRootContextType } from './types.js';

const RatingGroupRootContext = createContext<RatingGroupRootContextType>(null!);

export { RatingGroupRootContext };
