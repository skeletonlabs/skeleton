import type { useSteps } from './provider.svelte.js';
import { createContext } from '../../../internal/create-context.js';

export const StepsRootContext = createContext<ReturnType<typeof useSteps>>();
