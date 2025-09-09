import type { Api } from '@zag-js/toast';
import { createContext } from 'react';

export interface ToastRootContextType {
	api: Api;
}

export const ToastRootContext = createContext<ToastRootContextType>(null!);
