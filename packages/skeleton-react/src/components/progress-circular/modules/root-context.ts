import type { useProgressCircular } from './use-progress-circular';
import { createContext } from '@/internal/create-context';

export const ProgressCircularRootContext = createContext<ReturnType<typeof useProgressCircular>>();
