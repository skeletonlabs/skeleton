import type { useSwitch } from './use-switch';
import { createContext } from '@/internal/create-context';

export const SwitchRootContext = createContext<ReturnType<typeof useSwitch>>();
