import { createContext } from '../../../internal/create-context.js';
import type { useSlider } from './provider.svelte.js';

export const SliderRootContext = createContext<ReturnType<typeof useSlider>>();
