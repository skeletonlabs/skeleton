import { createContext } from '@/internal/create-context.js';
import type { Api } from '@zag-js/progress';

export interface ProgressLinearRootContextType {
	api: Api;
}

export const ProgressLinearRootContext = createContext<ProgressLinearRootContextType>();
