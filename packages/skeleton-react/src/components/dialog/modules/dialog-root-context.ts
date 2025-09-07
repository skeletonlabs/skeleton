import { createContext } from 'react';
import type { Api } from '@zag-js/dialog';

export interface DialogRootContextType {
	api: Api;
}

export const DialogRootContext = createContext<DialogRootContextType>(null!);
