import { createContext } from '@/internal/create-context';
import type { useProgressLinear } from './use-progress-linear';

export const ProgressLinearRootContext = createContext<ReturnType<typeof useProgressLinear>>();
