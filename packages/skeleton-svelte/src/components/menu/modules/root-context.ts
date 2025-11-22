import { createContext } from '../../../internal/create-context.js';
import type { useMenu } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useMenu>>();
