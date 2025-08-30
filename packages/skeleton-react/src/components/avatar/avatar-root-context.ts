import type { Api } from '@zag-js/avatar';
import { createContext } from 'react';

interface AvatarRootContextType {
	api: Api;
}

export const AvatarRootContext = createContext<AvatarRootContextType>(null!);
