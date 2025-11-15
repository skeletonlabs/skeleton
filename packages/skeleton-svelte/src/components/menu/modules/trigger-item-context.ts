import type { useMenu } from './provider.svelte.js';
import { createContext } from '@/internal/create-context.js';

export const TriggerItemContext = createContext<() => ReturnType<ReturnType<ReturnType<typeof useMenu>>['getTriggerItemProps']>>();
