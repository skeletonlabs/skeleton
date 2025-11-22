import { createContext } from '../../../internal/create-context.js';
import type { useToggleGroup } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useToggleGroup>>();
