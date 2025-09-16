import type { useDialog } from './use-dialog';
import { createContext } from '@/internal/create-context';

export const DialogRootContext = createContext<ReturnType<typeof useDialog>>();
