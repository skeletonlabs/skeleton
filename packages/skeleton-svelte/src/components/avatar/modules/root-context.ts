import { createContext } from '@/internal/create-context';
import type { useAvatar } from './use-avatar.svelte';

export const AvatarRootContext = createContext<ReturnType<typeof useAvatar>>();
