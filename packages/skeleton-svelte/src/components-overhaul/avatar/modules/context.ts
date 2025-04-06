import { createContext } from '../../../../internal/create-context-new.js';
import type { AvatarRootContext as AvatarRootContextType } from './types.js';

const AvatarRootContext = createContext<AvatarRootContextType>();

export { AvatarRootContext };
