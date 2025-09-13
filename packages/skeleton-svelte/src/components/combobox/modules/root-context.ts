import { createContext } from '@/internal/create-context';
import type { useCombobox } from './use-combobox.svelte';

export const ComboboxRootContext = createContext<ReturnType<typeof useCombobox>>();
