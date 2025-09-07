import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/avatar';

export interface AvatarRootContextType {
	api: Api;
}

export const AvatarRootContext = createContext<AvatarRootContextType>();
