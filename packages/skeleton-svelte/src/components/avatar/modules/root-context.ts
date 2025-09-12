import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/avatar';

export const AvatarRootContext = createContext<() => Api>();
