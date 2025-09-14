import type { Api } from '@zag-js/toast';

import { createContext } from '@/internal/create-context';

export const ToastRootContext = createContext<Api>();
