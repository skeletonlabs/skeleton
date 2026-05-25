import { createContext } from '../../../internal/create-context.js';
import type { useSegmentedControl } from './provider.js';

export const SegmentedControlRootContext = createContext<ReturnType<typeof useSegmentedControl>>();
