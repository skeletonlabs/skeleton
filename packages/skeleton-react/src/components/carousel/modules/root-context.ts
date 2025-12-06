import { createContext } from '../../../internal/create-context.js';
import type { useCarousel } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useCarousel>>();
