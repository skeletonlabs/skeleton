import { createContext } from '@/internal/create-context';

import type { useSwitch } from './use-switch.svelte';

export const SwitchRootContext = createContext<ReturnType<typeof useSwitch>>();
