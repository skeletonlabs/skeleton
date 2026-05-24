import type { useFloatingPanel } from './provider.js';
import { createContext } from '../../../internal/create-context.js';

export const FloatingPanelRootContext = createContext<ReturnType<typeof useFloatingPanel>>();
