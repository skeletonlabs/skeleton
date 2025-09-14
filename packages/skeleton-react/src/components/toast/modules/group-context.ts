import type { GroupService } from '@zag-js/toast';

import { createContext } from '@/internal/create-context';

export const ToastGroupContext = createContext<GroupService>();
