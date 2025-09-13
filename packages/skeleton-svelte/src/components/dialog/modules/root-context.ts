import { createContext } from '@/internal/create-context';
import type { useDialog } from './use-dialog.svelte';

export const DialogRootContext = createContext<ReturnType<typeof useDialog>>();
