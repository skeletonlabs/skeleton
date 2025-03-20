import { createContext } from '../../internal/create-context.js';
import type { AppShellContext } from './types.js';

// @ts-expect-error - Defaults for context don't make sense
export const [setAppShellContext, getAppShellContext, key] = createContext<AppShellContext>();
