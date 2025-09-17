import { createContext } from '@/internal/create-context';
import type { ItemProps } from '@zag-js/radio-group';

export const SegmentedControlItemContext = createContext<() => ItemProps>();
