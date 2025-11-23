import { createContext } from '../../../internal/create-context.js';
import type { useToggleGroup } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useToggleGroup>>();
