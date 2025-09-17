import type { useSegmentedControl } from './use-segmented-control.svelte';
import { createContext } from '@/internal/create-context';

export const SegmentedControlRootContext = createContext<ReturnType<typeof useSegmentedControl>>();
