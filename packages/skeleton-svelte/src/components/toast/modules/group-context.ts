import { createContext } from '../../../internal/create-context.js';
import type { GroupService } from '@zag-js/toast';

export const GroupContext = createContext<() => GroupService>();
