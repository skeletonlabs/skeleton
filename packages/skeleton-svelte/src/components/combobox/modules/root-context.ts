import type { useCombobox } from './provider.svelte';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useCombobox>>();
