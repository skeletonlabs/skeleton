import { createContext } from '../../../internal/create-context.js';
import type { useMarquee } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useMarquee>>();
