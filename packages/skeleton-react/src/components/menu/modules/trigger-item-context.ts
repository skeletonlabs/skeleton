import { createContext } from '../../../internal/create-context.js';
import type { useMenu } from './provider.js';

export const TriggerItemContext = createContext<ReturnType<ReturnType<typeof useMenu>['getTriggerItemProps']>>();
