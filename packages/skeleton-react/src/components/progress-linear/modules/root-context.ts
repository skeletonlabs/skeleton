import type { useProgressLinear } from './use-progress-linear';
import { createContext } from '@/internal/create-context';

export const ProgressLinearRootContext = createContext<ReturnType<typeof useProgressLinear>>();
