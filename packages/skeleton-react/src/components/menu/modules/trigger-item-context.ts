import type { useMenu } from './provider.js';
import { createContext } from '@/internal/create-context.js';

export const TriggerItemContext = createContext<() => ReturnType<ReturnType<typeof useMenu>['getTriggerItemProps']>>();
