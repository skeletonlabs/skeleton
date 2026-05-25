import { createContext } from '../../../internal/create-context.js';
import type { useProgress } from './provider.js';

export const ProgressRootContext = createContext<ReturnType<typeof useProgress>>();
