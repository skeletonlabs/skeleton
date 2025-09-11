import { createContext } from 'react';
import type { Api } from '@zag-js/progress';

export interface ProgressLinearRootContextType {
	api: Api;
}

export const ProgressLinearRootContext = createContext<ProgressLinearRootContextType>(null!);
