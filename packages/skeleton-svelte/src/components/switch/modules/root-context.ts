import type { useSwitch } from './use-switch.svelte';
import { createContext } from '@/internal/create-context';

export const SwitchRootContext = createContext<ReturnType<typeof useSwitch>>();
