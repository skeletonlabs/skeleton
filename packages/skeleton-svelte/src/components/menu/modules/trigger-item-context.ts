import { createContext } from '../../../internal/create-context.js';
import type { useMenu } from './provider.svelte.js';

export const TriggerItemContext = createContext<() => ReturnType<ReturnType<ReturnType<typeof useMenu>>['getTriggerItemProps']>>();
