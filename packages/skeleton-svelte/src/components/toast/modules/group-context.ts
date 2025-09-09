import type { GroupService, GroupApi } from '@zag-js/toast';
import { createContext } from '@/internal/create-context';

export interface ToastGroupContextType {
	groupApi: GroupApi;
	groupService: GroupService;
}

export const ToastGroupContext = createContext<ToastGroupContextType>();
