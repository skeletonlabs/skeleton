import { createContext } from 'react';
import type { useFloatingPanel } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useFloatingPanel> | null>(null);
