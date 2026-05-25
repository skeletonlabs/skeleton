import { createContext } from '../../../internal/create-context.js';
import type { useCombobox } from './provider.js';

export const ComboboxRootContext = createContext<ReturnType<typeof useCombobox>>();
