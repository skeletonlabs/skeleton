import type { useProgressLinear } from './use-progress-linear.svelte';
import { createContext } from '@/internal/create-context.js';

export const ProgressLinearRootContext = createContext<ReturnType<typeof useProgressLinear>>();
