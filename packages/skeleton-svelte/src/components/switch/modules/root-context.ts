import { createContext } from '../../../internal/create-context.js';
import type { useSwitch } from './provider.svelte.js';

export const SwitchRootContext = createContext<ReturnType<typeof useSwitch>>();
