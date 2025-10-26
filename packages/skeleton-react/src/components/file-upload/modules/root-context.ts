import type { useFileUpload } from './provider.js';
import { createContext } from '@/internal/create-context.js';

export const RootContext = createContext<ReturnType<typeof useFileUpload>>();
