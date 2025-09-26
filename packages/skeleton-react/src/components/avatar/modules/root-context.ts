import type { useAvatar } from './provider';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useAvatar>>();
