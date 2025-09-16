import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/toast';

export const ToastRootContext = createContext<Api>();
