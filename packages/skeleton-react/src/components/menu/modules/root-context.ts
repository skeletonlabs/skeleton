import type { useMenu } from './provider.js';
import { createContext } from 'react';

export const RootContext = createContext<ReturnType<typeof useMenu> | null>(null);
