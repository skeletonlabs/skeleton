import { createContext } from '../../../internal/create-context.js';
import type { useMarquee } from './provider.js';

export const MarqueeRootContext = createContext<ReturnType<typeof useMarquee>>();
