import type { useToggleGroup } from './provider';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useToggleGroup>>();
