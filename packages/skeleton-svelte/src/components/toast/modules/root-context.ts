import type { Api } from '@zag-js/toast';
import { createContext } from '@/internal/create-context';

export interface ToastRootContextType {
	api: Api;
}

export const ToastRootContext = createContext<ToastRootContextType>();
