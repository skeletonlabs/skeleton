import type { useProgressCircular } from './use-progress-circular.svelte';
import { createContext } from '@/internal/create-context.js';

export const ProgressCircularRootContext = createContext<ReturnType<typeof useProgressCircular>>();
