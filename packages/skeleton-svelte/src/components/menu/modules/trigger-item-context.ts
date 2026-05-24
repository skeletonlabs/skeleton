import { createContext } from '../../../internal/create-context.js';
import type { useMenu } from './provider.svelte.js';

export const MenuTriggerItemContext = createContext<() => ReturnType<ReturnType<ReturnType<typeof useMenu>>['getTriggerItemProps']>>();
