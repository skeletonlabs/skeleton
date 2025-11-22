import { createContext } from '../../../internal/create-context.js';
import type { useSegmentedControl } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useSegmentedControl>>();
