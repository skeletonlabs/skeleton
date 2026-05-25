import { createContext } from '../../../internal/create-context.js';
import type { useCarousel } from './provider.svelte.js';

export const CarouselRootContext = createContext<ReturnType<typeof useCarousel>>();
