import { createContext } from '@/internal/create-context.js';
import type { Api } from '@zag-js/progress';

export const ProgressLinearRootContext = createContext<() => Api>();
