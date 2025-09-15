import { createContext } from '@/internal/create-context';

import type { useTagsInput } from './use-tags-input.svelte';

export const TagsInputRootContext = createContext<ReturnType<typeof useTagsInput>>();
