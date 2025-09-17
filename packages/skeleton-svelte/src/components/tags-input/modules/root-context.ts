import type { useTagsInput } from './use-tags-input.svelte';
import { createContext } from '@/internal/create-context';

export const TagsInputRootContext = createContext<ReturnType<typeof useTagsInput>>();
