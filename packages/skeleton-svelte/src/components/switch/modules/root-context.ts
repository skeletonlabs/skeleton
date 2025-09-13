import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/switch';

export const SwitchRootContext = createContext<() => Api>();
