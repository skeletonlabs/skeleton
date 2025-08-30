import { createContext } from '../../../internal/create-context.js';
import type { Api } from '@zag-js/avatar';

export interface AvatarRootContextType {
	api: Api;
}

export const AvatarRootContext = createContext<AvatarRootContextType>();
