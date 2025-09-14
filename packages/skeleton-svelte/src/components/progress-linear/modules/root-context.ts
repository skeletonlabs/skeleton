import { createContext } from '@/internal/create-context.js';

import type { useProgressLinear } from './use-progress-linear.svelte';

export const ProgressLinearRootContext = createContext<ReturnType<typeof useProgressLinear>>();
