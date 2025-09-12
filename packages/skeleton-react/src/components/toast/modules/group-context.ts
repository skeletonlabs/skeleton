import type { GroupService, GroupApi } from '@zag-js/toast';
import { createContext } from 'react';

export interface ToastGroupContextType {
	groupApi: GroupApi;
	groupService: GroupService;
}

export const ToastGroupContext = createContext<ToastGroupContextType>(null!);
