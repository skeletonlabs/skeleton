import { createContext } from '@/internal/create-context';
import type { GroupService } from '@zag-js/toast';

export const ToastGroupContext = createContext<() => GroupService>();
