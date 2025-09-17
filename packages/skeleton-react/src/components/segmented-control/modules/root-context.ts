import type { useSegmentedControl } from './use-segmented-control';
import { createContext } from '@/internal/create-context';

export const SegmentedControlRootContext = createContext<ReturnType<typeof useSegmentedControl>>();
