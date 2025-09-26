import type { useProgressLinear } from './provider.svelte';
import { createContext } from '@/internal/create-context.js';

export const RootContext = createContext<ReturnType<typeof useProgressLinear>>();
