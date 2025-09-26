import type { useCombobox } from './provider';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useCombobox>>();
