import { createContext } from '../../../internal/create-context.js';
import type { useSegmentedControl } from './provider.svelte.js';

export const SegmentedControlRootContext = createContext<ReturnType<typeof useSegmentedControl>>();
