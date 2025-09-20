import type { useSlider } from './use-slider';
import { createContext } from '@/internal/create-context';

export const SliderRootContext = createContext<ReturnType<typeof useSlider>>();
