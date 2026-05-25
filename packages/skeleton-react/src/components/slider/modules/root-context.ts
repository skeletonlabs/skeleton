import { createContext } from '../../../internal/create-context.js';
import type { useSlider } from './provider.js';

export const SliderRootContext = createContext<ReturnType<typeof useSlider>>();
