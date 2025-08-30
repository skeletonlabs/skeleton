import type { Api } from '@zag-js/avatar';
import { createContext } from '../../internal/create-context.js';

interface AvatarRootContextType {
	api: Api;
}

const AvatarRootContext = createContext<AvatarRootContextType>();

export { AvatarRootContext };
