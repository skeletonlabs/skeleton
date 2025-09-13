import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/tabs';

export const TabsRootContext = createContext<Api>();
