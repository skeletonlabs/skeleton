import { createContext } from '@/internal/create-context';
import type { useAvatar } from './use-avatar';

export const AvatarRootContext = createContext<ReturnType<typeof useAvatar>>();
