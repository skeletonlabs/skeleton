import { createContext } from '../../../internal/create-context.js';
import type { useFileUpload } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useFileUpload>>();
