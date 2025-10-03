import type { useDatePicker } from './provider';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useDatePicker>>();
