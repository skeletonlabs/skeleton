import { createContext } from '../../../internal/create-context.js';
import type { useAvatar } from './provider.svelte.js';

export const AvatarRootContext = createContext<ReturnType<typeof useAvatar>>();
