import { createContext } from '../../../internal/create-context.js';
import type { useTagsInput } from './provider.js';

export const TagsInputRootContext = createContext<ReturnType<typeof useTagsInput>>();
