import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/progress';

export const ProgressLinearRootContext = createContext<Api>();
