import type { useTagsInput } from './use-tags-input';
import { createContext } from '@/internal/create-context';

export const TagsInputRootContext = createContext<ReturnType<typeof useTagsInput>>();
