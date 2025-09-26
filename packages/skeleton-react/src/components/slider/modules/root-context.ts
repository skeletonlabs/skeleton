import type { useSlider } from './provider';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useSlider>>();
