import { createContext } from 'react';
import type { useMenu } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useMenu> | null>(null);
