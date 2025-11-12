import type { useMenu } from './provider.svelte.js';
import { createContext } from '@/internal/create-context.js';

export const MenuRootContext = createContext<ReturnType<typeof useMenu>>();
