import type { Api } from '@zag-js/avatar';
import { createContext } from '../../../internal/create-context.js';

interface AvatarRootContextType {
	api: Api;
}

export const AvatarRootContext = createContext<AvatarRootContextType>();
