import type { useSteps } from './provider.js';
import { createContext } from '../../../internal/create-context.js';

export const StepsRootContext = createContext<ReturnType<typeof useSteps>>();
