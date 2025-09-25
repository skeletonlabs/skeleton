import type { useDialog } from './use-dialog.svelte';
import { createContext } from '@/internal/create-context';

export const DialogRootContext = createContext<ReturnType<typeof useDialog>>();
