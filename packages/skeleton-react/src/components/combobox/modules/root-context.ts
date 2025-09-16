import type { useCombobox } from './use-combobox';
import { createContext } from '@/internal/create-context';

export const ComboboxRootContext = createContext<ReturnType<typeof useCombobox>>();
