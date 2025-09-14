import { createContext } from '@/internal/create-context';

import type { useDialog } from './use-dialog';

export const DialogRootContext = createContext<ReturnType<typeof useDialog>>();
