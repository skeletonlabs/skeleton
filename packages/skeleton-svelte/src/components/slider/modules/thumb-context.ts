import { createContext } from '@/internal/create-context';
import type { ThumbProps } from '@zag-js/slider';

export const SliderThumbContext = createContext<() => ThumbProps>();
