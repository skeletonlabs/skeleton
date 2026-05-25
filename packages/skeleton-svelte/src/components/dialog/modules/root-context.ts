import { createContext } from '../../../internal/create-context.js';
import type { useDialog } from './provider.svelte.js';

export const DialogRootContext = createContext<ReturnType<typeof useDialog>>();
