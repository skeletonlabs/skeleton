import { createContext } from '../../../internal/create-context.js';
import type { useCarousel } from './provider.js';

export const CarouselRootContext = createContext<ReturnType<typeof useCarousel>>();
