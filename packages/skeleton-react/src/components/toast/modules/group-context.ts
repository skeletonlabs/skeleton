import { createContext } from '@/internal/create-context';
import type { GroupService, GroupApi } from '@zag-js/toast';

export const ToastGroupContext = createContext<{ api: GroupApi; service: GroupService }>();
