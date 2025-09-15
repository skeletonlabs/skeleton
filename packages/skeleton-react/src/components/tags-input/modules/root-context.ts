import { createContext } from '@/internal/create-context';

import type { useTagsInput } from './use-tags-input';

export const TagsInputRootContext = createContext<ReturnType<typeof useTagsInput>>();
