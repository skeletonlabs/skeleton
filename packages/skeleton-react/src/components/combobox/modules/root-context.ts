import { createContext } from '@/internal/create-context';

import type { useCombobox } from './use-combobox';

export const ComboboxRootContext = createContext<ReturnType<typeof useCombobox>>();
