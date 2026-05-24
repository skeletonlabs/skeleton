import { createContext } from '../../../internal/create-context.js';
import type { useToggleGroup } from './provider.js';

export const ToggleGroupRootContext = createContext<ReturnType<typeof useToggleGroup>>();
