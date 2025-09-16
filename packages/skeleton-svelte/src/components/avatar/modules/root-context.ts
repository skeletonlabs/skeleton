import type { useAvatar } from './use-avatar.svelte';
import { createContext } from '@/internal/create-context';

export const AvatarRootContext = createContext<ReturnType<typeof useAvatar>>();
